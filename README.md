# Scrum Team App

## Getting Started - Back End

**Please Note** All of these commands are run from the back-end folder

On the first time, install the node modules:
`npm install`

When developing, use the following command:
`npm run start`

This will start a server on localhost:8081

This command will continuously run and compile your code as you work, so you don't have to keep restarting your server.

Optionally, you could also run:
`npm start`

For production, use the following commands:
```bash
npm run build
npm run serve
```

**build** precompiles the code into the back-end/dist directory
**serve** runs the precompiled code from the back-end/dist directory 

## Getting Started - Front End

**Please Note** All of these commands are run from the front-end folder

On the first time, install the node modules:
`npm install`

When developing, use the following command:
`npm run start`

This will open a new tab in your default browser to localhost:3000

This command will continuously run and compile your code and your SCSS as you work, so you don't have to keep recompiling manually.  It will also show your changes without you having to refresh the browser.

Optionally, you could also run:
`npm start`

For production, use the following command:
`npm run build`

This precompiles the code into the front-end/build directory

## SCSS files

The SCSS compiler is set up in such a way that you don't have to use relative paths to import modules. So for instance, you can do something like

```
@import 'components/_button.scss' //For a file under the scss folder
@import 'package-name/file-name' //For a stylesheet from a node module
```

## Acknowledgements

The setup and commands for the Back End come from https://github.com/babel/example-node-server

The setup and commands for the Front End come from https://github.com/facebookincubator/create-react-app