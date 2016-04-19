const React = require('react');
const ReactDOM = require('react-dom');


const App = React.createClass({
  alertStuff (msg) {
    alert(msg);
  },

  render() {
    return (
      <div>
        <button onClick={this.alertStuff.bind(this, 'hi')}>Click Me</button>
        <button onClick={this.alertStuff.bind(this, 'bye')}>Click Me</button>
      </div>
    )
  }
})

 ReactDOM.render(<App/>, document.body);
const button = document.createElement('button');
button.onclick = () => alert('hi');
button.appendChild(document.createTextNode('Click Me'));
document.body.appendChild(button);
