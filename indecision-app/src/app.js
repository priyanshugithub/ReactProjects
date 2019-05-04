console.log('App.js is running')

// JSX
var createApp = {
    title: 'Indecision App',
    subtitle: 'Something more'
};
var template = (<div>
    <h1>{createApp.title}</h1>
    <p>{createApp.subtitle}</p>
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
        return location;
    } else {
        return 'Unknown';
    }
}
var templateTwo = (<div>
    <h1>{user.userName.toUpperCase() + '!'}</h1>
    <p>{user.age}</p>
    <p>{getLocation(user.location)}</p>
    </div>);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);