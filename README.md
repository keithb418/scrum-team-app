# Scrum Team App

## Getting Started

On the first time, install the node modules:

`npm install`

When developing, use the following command:

`mongod --dbpath=./data/db --smallfiles`
This will start mongo on port=27017. Make sure you have data/db directory created in the root level.

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

## Test

Run `npm test` to run tests with Jest

## API Server

Information about the API server and how to use it.

The following resource types are available:

| Resource Type   | Usage          |
|-----------------|----------------|
| teamsResource | Team resource |
| teamMembersResource | Team members resource |
| rolesResource | Roles resource |

### API Endpoints

The following endpoints are available:

| Endpoints       | Usage          | Params         |
|-----------------|----------------|----------------|
| `GET /api/${this.resourceType}` | Returns all resource objects based on the specified reasource type from the database. For exmaple, ``/api/teamsResource/`` will retrieve all the teams from the database | &nbsp; |
| `GET /api/${this.resourceType}/:id` | Returns a single resource object based on the specified resource type | &nbsp; |
| `POST /api/${this.resourceType}` | Creates a new post to the specified resource type | &nbsp; |
| `PUT /api/${this.resourceType}/:id` | Updates a single resource object based on the specified resource type | &nbsp; |
| `DELETE /api/${this.resourceType}/:id` | Delete a single resource object based on specified resource type | &nbsp; |

## Acknowledgements

The setup and commands for the Back End come from https://github.com/babel/example-node-server
