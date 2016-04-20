const React = require('react');
const ReactDOM = require('react-dom');


const ContentToggle = React.createClass({
  getInitialState () {
    return {
      showDetails: false
    };
  },

  toggle () {
    this.setState({
      showDetails: !this.state.showDetails
    }, this.maybeFocus)
  },

  handleKeyboard (event) {
    if (event.key === 'Enter'  || event.key === ' ')
      this.toggle();
  },

  maybeFocus (event) {
    if (this.state.showDetails)
      this.refs.details.getDOMNode().focus();
  },

  render() {
    var details;
    var summaryClassName = 'ContentToggle__Summary';

    if (this.state.showDetails) {
      details = this.props.children;
      summaryClassName += ' ContentToggle__Summary--open';
    }

    return (
      <div className='ContentToggle'>
        <div
          tabIndex='0'
          onClick={this.toggle}
          onKeyPress={this.handleKeyboard}
          className={summaryClassName}
        >
          {this.props.summary}
        </div>

        <div
          ref="details"
          tabIndex='-1' className="ContentToggle__Details"
        >
          {details}
        </div>
      </div>
    )
  }
})

const App = React.createClass({
  render() {
    return (
      <div>
        <ContentToggle summary="Jerk Chicken">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </ContentToggle>
      </div>
    )
  }
})

ReactDOM.render(<App/>, document.body)
