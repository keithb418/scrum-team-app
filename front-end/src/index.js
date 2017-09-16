import React from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';
import style from './scss/index.scss';

const store = createStore(reducer, {
    teams: [],
    teamMembers: [
        {
            "_id": 1,
            "name": "Member One",
            "email": "member.one@example.com",
            "team": "ReactDojo",
            "teamLead": true,
            "teamHistory": ["ReactDojo", "AngularDojo"],
            "role": "Front-End Developer",
            "skills": ["HTML5", "CSS3", "ES6", "ReactJS", "AngularJS"]
        },
        {
            "_id": 2,
            "name": "Member Two",
            "email": "member.two@example.com",
            "team": "ReactDojo",
            "teamHistory": ["ReactDojo"],
            "role": "Back-End Developer",
            "skills": ["Java 8", "Spring", "Spring Boot", "Spring Security", "REST", "Docker"]
        }
    ]
});

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
