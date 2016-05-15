var React = require('react');
var ReactDOM = require('react-dom')
var styles = require('./styles');
const { array, func, number } = React.PropTypes

var Tabs = React.createClass({

  propTypes: {
    data: array.isRequired,
    activeTabIndex: number.isRequired,
    onActivateTab: func.isRequired
  },

  handleTabClick (activeTabIndex) {
    this.props.onActivateTab(activeTabIndex);
  },

  renderTabs () {
    return this.props.data.map((tab, index) => {
      var style = this.props.activeTabIndex === index ?
        styles.activeTab : styles.tab;
      var clickHandler = this.handleTabClick.bind(this, index);
      return (
        <div key={tab.name} style={style} onClick={clickHandler}>
          {tab.name}
        </div>
      );
    });
  },

  renderPanel () {
    var tab = this.props.data[this.props.activeTabIndex];
    return (
      <div>
        <p>{tab.description}</p>
      </div>
    );
  },

  render () {
    return (
      <div style={styles.app}>
        <div style={styles.tabs}>
          {this.renderTabs()}
        </div>
        <div style={styles.tabPanels}>
          {this.renderPanel()}
        </div>
      </div>
    );
  }
});
module.exports = Tabs;
