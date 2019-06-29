import React from 'react';
import Particles from 'react-particles-js';
import QuoteBoard from './QuoteBoard';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

function App() {
  return (
    <div className="App">
    <Particles className='particles'
          params={particlesOptions}
        />
      <header className="App-header">
      <article class="center mw5 mw6-ns br3 hidden ba b--black-20 mv6 bg-animate hover-bg-lightest-blue">
  <h1 class="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Quotes</h1>
  <div class="pa3 bt b--black-10">
  <QuoteBoard />
  </div>
</article>
      </header>
    </div>
  );
}

export default App;