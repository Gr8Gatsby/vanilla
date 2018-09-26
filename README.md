## Javascript Frameworks in Visualforce

This project compares some popular Javascript frameworks used in a Visualforce container. A common application is used for comparison: a data table with inline edit. This is an [SFDX project](https://trailhead.salesforce.com/en/trails/sfdx_get_started).


### Prerequisites

- **An Org Configured as a Dev Hub**

    <a href="https://developer.salesforce.com/promotions/orgs/dx-signup" target="_blank">Salesforce DX org sign-up</a>

- **The Salesforce CLI and `salesforcedx` Plugin.**

    To install the Salesforce CLI, start here: <a href="https://developer.salesforce.com/tools/sfdxcli" target="_blank">Salesforce CLI</a>

    If you've already installed the Salesforce CLI, update your plugins.
    ```bash
    sfdx plugins:update
    ```

    The installed version of the salesforcedx plugin must support API version 44.0 or later. Check the API version.
    ```bash
    sfdx plugins --core
    ```
- **Git**

   Install [Git](https://help.github.com/articles/set-up-git/)

- **Node.js**

   Install [Node.js](https://nodejs.org)

- **Visual Studio Code and Extensions**

    Install [Visual Studio Code](https://code.visualstudio.com/) and [Salesforce Extensions for VS Code](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode).


## Installation Instructions

1. Authenticate with your hub org (if not already done)
    ```
    sfdx force:auth:web:login -d -a myhuborg
    ```

1. Clone the repository
    ```
    git clone  git@github.com:Gr8Gatsby/vanilla.git
    cd vanilla
    ```

1. Install dependencies, build and copy artifacts to sfdx locations
    ```
    yarn
    ```

    The build produces a production version by default. It is minified and tree-shaken.

1. Create a scratch org and provide it with an alias
    ```
    sfdx force:org:create -s -f config/project-scratch-def.json -a vanilla
    ```

1. Push the app to your scratch org
    ```
    sfdx force:source:push
    ```

1. Load sample data
    ```
    sfdx force:data:tree:import --plan ./data/Market__c-plan.json
    ```

1. Open the scratch org
    ```
    sfdx force:org:open
    ```

1. In App Launcher, select the **Vanilla** app.


## Project Structure

The project is a monorepo meaning it contains sub-projects. The `packages` directory hosts the sub-projects. Each sub-project is an implementation of the application in a different framework.

[Lerna](https://lernajs.io/) is used to simplify working across the many sub-projects. By running `yarn build` in the root directory, all sub-projects are also built.


## Application Walkthrough

The Vanilla app consists of three different Visualforce pages and Market data downloaded from [data.gov](https://apps.ams.usda.gov/FarmersMarketsExport/ExcelExport.aspx). This app uses a Custom Object called Market, which contains a subset of the fields available from data.gov.

Each tab focuses on a different approach to building the same functionality for a data table component.  The data is loaded via <apex:remoteObjects>. Each local project from the ```packages``` directory is minimized during the build command and automatically placed in the ```force-app\main\default\staticresources``` directory of the project

1. JavaScript + <custom-element>

This app produces a 2kb gzipped bundle of JavaScript and creates a ```<data-table>``` custom element. The custom element supports a ```<data-column>``` sub element where the data columns for the table are defined.  This custom element has these attributes:

* field (e.g. FMID__c) - specifies the field name returned from the apex remote object.
* label (e.g. Market Id) - specifies the display name of the column
* editable (e.g. true/false) - enables double click editing for the data

1. Vue

This app produces a 35.4kb gzipped bundle of JavaScript and creates a ```<data-table>``` Vue element. The Vue element supports a ```<data-column>``` sub element where the data columns for the table are defined.  This Vue element has these attributes:

* field (e.g. FMID__c) - specifies the field name returned from the apex remote object.
* label (e.g. Market Id) - specifies the display name of the column
* editable (e.g. true/false) - enables double click editing for the data

In order to bind the element to the data someone using the declaritive tag must also specify the Vue binding and click event as attributes of the ```<data-table>```

```v-bind:data="data" v-on:change="$emit('change', $event)"```


1. React

This app produces a 38.6kb gzipped bundle of JavaScript and creates a ```<DataTable>``` react element. The React element supports a ```<DataColumn>``` sub elemebt where the data columns for the table are defined. The React element supports these props:

* field (e.g. FMID__c) - specifies the field name returned from the apex remote object.
* label (e.g. Market Id) - specifies the display name of the column
* editable (e.g. true/false) - enables double click editing for the data

## Making Changes

### Local Development

This flow enables rapid, iterative development. The sub-projects are setup to support local development: source code is not minified and the build _watches_ for changes. Whenever a file changes, the project is rebuilt; reloading your browser displays the changes. A subset of the data is used.

1. Change to a sub-project's directory. For example,
    ```
    cd packages/vanilla-datatable
    ```

1. Start the a local server and run the build in _watch_ and development mode.
    ```
    yarn start
    ```


### Developing on force.com

1. After making changes to a sub-project you must build the projects and copy updated artifacts into the sfdx project.
    ```
    yarn build
    ```

1. Then push the app to your scratch org.
    ```
    sfdx force:source:push
    ```

