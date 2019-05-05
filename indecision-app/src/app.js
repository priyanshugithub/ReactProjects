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

let count = 0;
const addOne = () => {
    count ++;
    renderCounterApp();
};

const minusOne = () => {
    count --;
    renderCounterApp();
};

const resetApp = () => {
    count = 0;
    renderCounterApp();
};
const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
        <h1>Count : {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={resetApp}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();


