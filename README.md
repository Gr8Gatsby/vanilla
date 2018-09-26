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

