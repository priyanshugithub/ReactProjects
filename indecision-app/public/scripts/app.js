'use strict';

console.log('App.js is running');

// JSX
var createApp = {
    title: 'Indecision App',
    subtitle: '',
    options: ['one', 'two']
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;

    if (option) {
        createApp.options.push(option);
        e.target.elements.option.value = '';
    }
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
    ),
    React.createElement(
        'form',
        { onSubmit: onFormSubmit },
        React.createElement('input', { type: 'text', name: 'option' }),
        React.createElement(
            'button',
            null,
            'Add Option'
        )
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
