console.log('App.js is running')

// JSX
var createApp = {
    title: 'Indecision App',
    subtitle: '',
    options : []
};

function prender(options) {
    if(options.length > 0){
    return "Here are your options"}

}
var template = (<div>
    <h1>{createApp.title}</h1>
    {createApp.subtitle && <p>{createApp.subtitle}</p>}
    <p>{createApp.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
    <li>Item One</li>
    <li>Item Two</li>
    <li>Item Three</li>
    </ol>
    </div>
    );

var user = {
    userName: 'Priyanshu',
    age: 23,
    location: 'New Delhi'
};
function getLocation(location) {
    if (location){
        return <p>Location : {location}</p>;
    }
}

var templateTwo = 
    (
    <div>
    <h1>{user.userName.toUpperCase() ? user.userName : 'Anonymous' + '!'}</h1>
    {(user.age && user.age >= 18) && <p>Age :{user.age}</p>}
    <p>{getLocation(user.location)}</p>
    </div>
    );

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);