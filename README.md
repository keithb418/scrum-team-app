# Scrum Team App

## Getting Started

On the first time, install the node modules:
`npm install`

When developing, use the following command:
`npm start`

This will start a server on localhost:3000

This command will continuously run and compile your code as you work, so you don't have to keep restarting your server.

For production, use the following commands:
```bash
npm run build
node server.js
```

**npm run build** compiles the code into the dist directory
**node server.js** start a server on the production port

## SCSS files

The SCSS compiler is set up in such a way that you don't have to use relative paths to import modules. So for instance, you can do something like

```
@import 'components/_button.scss' //For a file under the scss folder
@import 'package-name/file-name' //For a stylesheet from a node module
```

## Acknowledgements

The setup and commands for the Back End come from https://github.com/babel/example-node-server