# Scrum Team App

Scrum team app helps scrum masters manage development teams.

## Screen
Supports the following desktop browsers: Chrome, Safari and IE11

![Dash board](https://s3-us-west-1.amazonaws.com/asc2683/scrum-team/scrum-team-dashboard-v1.png)

## URL
https://scrum-team.herokuapp.com

## Getting started


1. Clone repo and use master branch

2. Install dependencies `$ npm install`

3. Start mongo `$ mongod --dbpath=./data/db --smallfiles`. This will start mongo on `port=27017`. Make sure you have data/db directory created at the root level.

4. Start express server ```npm start```. This will start a server on localhost:3000

## API

Checkout README in the [development branch](https://github.com/keithb418/scrum-team-app/blob/development/README.md)

## Acknowledgements

The setup and commands for the Back End come from https://github.com/babel/example-node-server