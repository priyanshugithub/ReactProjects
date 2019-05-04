'use strict';

console.log('App.js is running');

// JSX
var createApp = {
    title: 'Fuckoff',
    subtitle: 'Fuck me off'
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        createApp.title
    ),
    React.createElement(
        'p',
        null,
        createApp.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        ),
        React.createElement(
            'li',
            null,
            'Item Three'
        )
    )
);

var user = {
    userName: 'Priyanshu',
    age: 23,
    location: 'New Delhi'
};
function getLocation(location) {
    if (location) {
        return location;
    } else {
        return 'Unknown';
    }
}
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.userName.toUpperCase() + '!'
    ),
    React.createElement(
        'p',
        null,
        user.age
    ),
    React.createElement(
        'p',
        null,
        getLocation(user.location)
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
