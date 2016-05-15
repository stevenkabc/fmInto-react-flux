////////////////////////////////////////////////////////////////////////////////
// Excercise:
//
// make tabs a "pure component" by not managing any of its own state, instead
// add a property to tell it which tab to show, and then have it communicate
// with its owner to get rerendered with a new active tab.
//
// Why would you move that state up? you might have a workflow where they can't
// progress from one step to the next until they've completed some sort of task
// but they can go back if they'd like. If the tabs keep their own state you
// can't control them with your application logic.
////////////////////////////////////////////////////////////////////////////////
var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('./Tabs');
var data = require('./data');

var App = React.createClass({
  getInitialState () {
    return {
      activeTabIndex: 0
    };
  },
  handleTab (activeTabIndex) {
    this.setState({activeTabIndex});
  },

  render () {
    return (
      <div>
        <h1>Props v. State</h1>
        <Tabs onActivateTab={this.handleTab}
          activeTabIndex={this.state.activeTabIndex}
          data={this.props.tabs}/>
      </div>
    );
  }
});

ReactDOM.render(<App tabs={data}/>, document.body);
