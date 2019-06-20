import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
   async onSearchSubmit(term) {
       const response = await axios
       .get('https://api.unsplash.com/search/photos', {
           params: { query: term }, 
           headers: {
            Authorization: 'Client-ID deefdf01510843b34d3446ea627bbae2d58f7e68d8c66d8500e40b47e71db93c'
        }
       });
       console.log(response.data.results);
   }
   
    render() { 
    return (
        <div className="ui container" style={{ marginTop: '10px'}} >
        <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
        );
}
}

export default App;