const React = require('react');
const ReactDOM = require('react-dom');
//
//

const ContentToggle = React.createClass({
  getInitialState () {
    return {
      showDetails: false
    }
  },

  toggle () {
    this.setState({
      showDetails: !this.state.showDetails
    }, this.maybeFocus)
  },
  maybeFocus (event) {
    if (this.state.showDetails)
      this.refs.details.focus();
  },

  handleKeyboard (event) {
    if (event.key === 'Enter'  || event.key === ' ')
      this.toggle();
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

module.exports = ContentToggle;
