## Web Components on force.com

Lorem ipsum

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


## Application Walkthrough

Lorem ipsum


## Making Changes

1. After making changes to a sub-project you must build the projects and copy updated artifacts into the sfdx project.
    ```
    yarn build
    ```

1. Then push the app to your scratch org.
    ```
    sfdx force:source:push
    ```

