const React = require('react');
const ReactDOM = require('react-dom');
var classNames = require('classnames');
//
//

const ContentToggle = React.createClass({

    propTypes: {
      summary: React.PropTypes.string,
      isOpen: React.PropTypes.bool,
      onToggle: React.PropTypes.func.isRequired
    },

  toggle () {
    this.props.onToggle();
  },

  componentDidUpdate () {
    this.maybeFocus();

  },
  maybeFocus (event) {
    if (this.props.isOpen)
      this.refs.details.focus();
  },

  handleKeyboard (event) {
    if (event.key === 'Enter'  || event.key === ' ')
      this.toggle();
  },

  render() {
    var details;
    var summaryClassName = classNames(
      'ContentToggle__Summary',
      {'ContentToggle__Summary--open': this.props.isOpen}
    );

    if (this.props.isOpen) {
      details = this.props.children;
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
