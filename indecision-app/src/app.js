console.log('App.js is running')

// JSX
var createApp = {
    title: 'Indecision App',
    subtitle: '',
    options : ['one', 'two']
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option){
        createApp.options.push(option);
        e.target.elements.option.value = '';
    }

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
    <form onSubmit={onFormSubmit}>
    <input type="text" name="option" />
    <button>Add Option</button>
    </form>
    </div>
    );

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);