import React from 'react';
import { Fragment } from 'react';

class QuoteBoard extends React.Component{
  state = {
    quotes: [],
    randomQuote: null
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(rsp => rsp.json())
      .then(quotes => this.setState(quotes))
      .catch(e=> console.log(e)
      )
  }

  componentDidUpdate(prevProps, prevState) {
    this.state.quotes !== prevState.quotes && this.getRandomQuote()
  }

  getRandomQuote = () => {
    this.setState({
      randomQuote: this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)]
    })
  }

  render() {
    const { randomQuote } = this.state
    return (
            <div>
            {randomQuote &&
              <Fragment>
                <div>
                <h4 className="i">{randomQuote.quote}</h4>
                  - <span>{randomQuote && randomQuote.author}</span>
                </div>
                <div>
                <br />
                  <button onClick={this.getRandomQuote} className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>New quote</button>
                </div>
              </Fragment>}
          </div>
    );
  }
}

export default QuoteBoard;