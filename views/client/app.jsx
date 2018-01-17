const React = require('react');
const ReactDOM = require('react-dom');
const doneReact = require('../../lib/doneReact');

class ClientApp extends React.Component {
//  constructor() {
//    super();
//  }

  render() {
    return <section>
             <h2>Hello, world!</h2>
           </section>;
  }
}

ReactDOM.render(<ClientApp />, document.getElementById('root'));
