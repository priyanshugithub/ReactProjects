'use strict';

console.log('App.js is running');

// JSX
var createApp = {
    title: 'Indecision App',
    subtitle: '',
    options: []
};

function prender(options) {
    if (options.length > 0) {
        return "Here are your options";
    }
}
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        createApp.title
    ),
    createApp.subtitle && React.createElement(
        'p',
        null,
        createApp.subtitle
    ),
    React.createElement(
        'p',
        null,
        createApp.options.length > 0 ? 'Here are your options' : 'No options'
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

var count = 0;
var addOne = function addOne() {
    count++;
    renderCounterApp();
};

var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};

var resetApp = function resetApp() {
    count = 0;
    renderCounterApp();
};
var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count : ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: resetApp },
            'Reset'
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
