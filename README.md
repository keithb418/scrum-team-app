# Scrum Team App

Scrum team app helps scrum masters manage development teams.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The following setup is required

```
Git
Node v6.10.2
MongoDB v3.4.4
```

### Installing

Clone and cd into the scrum-team-app

```
$ cd scrum-team-app
```

#### For development build

```
$ git checkout development
```

Install dependencies

```
$ npm install
```

Start mongo

```
$ mongod --dbpath=./data/db --smallfiles
```

This will start mongo on port=27017. Make sure you have data/db directory created in the root level.

Start server

```
$ npm start
```
This will start a server on **localhost:3000**

This will continuously run and compile your code as you work, so you don't have to keep restarting your server.


#### For production build
```
$ npm run build
$ node server.js
```
`npm run build` compiles the code into the dist directory
`node server.js` start a server on the production port

#### Mock data

To use mock data to seed the app
```
$ npm install -g node-mongo-seeds
```

To seed your mongodb with mock data from /seeds folder
```
$ seed
```

## Running the tests

```
$ npm test
```

## Built With

* [React](https://github.com/facebook/react) - React is a JavaScript library for building user interfaces
* [Redux](https://github.com/reactjs/redux) - Redux is a predictable state container for JavaScript apps
* [Express](https://maven.apache.org/) - Express is minimal and flexible Node.js web application framework
* [MongoDB](https://www.mongodb.com/) - MongoDB is a NoSQL database
* [Webpack](https://github.com/webpack/webpack) - Webpack is a module bundler


## API

Information about the API server and how to use it.

The following resource types are available:

| Resource Type   | Usage          | Example       |
|-----------------|----------------|----------------
| teams | Team resource | localhost:3000/api/teams |
| teamMembers | Team member resource | localhost:3000/api/teamMembers |
| roles | Roles resource | localhost:3000/api/roles |

### Endpoints

The following endpoints are available:

| Endpoints       | Usage          |
|-----------------|----------------|
| GET /api/${this.resourceType} | Returns all resource objects based on the specified reasource type from the database. For exmaple, ``/api/teams/`` will retrieve all the teams from the database |
| GET /api/${this.resourceType}/:id | Returns a single resource object based on the specified resource type |
| POST /api/${this.resourceType} | Creates a new post to the specified resource type |
| PUT /api/${this.resourceType}/:id | Updates a single resource object based on the specified resource type |
| DELETE /api/${this.resourceType}/:id | Delete a single resource object based on specified resource type |


### API Examples

#### Teams

```
{
    "teams": [{
        "_id": "59316b89008c586bc221431a",
        "name": "Team Patriots"
    }, {
        "_id": "59316b89008c586bc221431b",
        "name": "Team Vikings"
    }, {
        "_id": "59316b89008c586bc221431c",
        "name": "Team Eagles"
    }]
}
```

#### TeamMembers

```
{
    "teamMembers": [{
        "_id": "59316b89008c586bc2214318",
        "name": "Member One",
        "email": "member.one@example.com",
        "team": "59316b89008c586bc221431c",
        "teamLead": true,
        "role": "Front-End Developer",
        "skills": ["HTML5", "CSS3", "ES6", "ReactJS", "AngularJS"],
        "experience": "Mid Level"
    }, {
        "_id": "59316b89008c586bc2214317",
        "name": "Member Two",
        "email": "member.two@example.com",
        "team": "59316b89008c586bc221431b",
        "role": "Back-End Developer",
        "skills": ["Java 8", "Spring", "Spring Boot", "Spring Security", "REST", "Docker"],
        "teamLead": false,
        "experience": "Mid Level"
    }, {
        "_id": "59316b89008c586bc2214316",
        "name": "Member Three",
        "email": "member.three@example.com",
        "team": "59316b89008c586bc221431a",
        "role": "Front-End Developer",
        "skills": ["HTML5", "CSS3", "ES7", "ReactJS", "BackboneJS"],
        "teamLead": false,
        "experience": "Level not applicable"
    }]
}


```



## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/keithb418/scrum-team-app/tags).

## Acknowledgements

The setup and commands for the Back End come from https://github.com/babel/example-node-server