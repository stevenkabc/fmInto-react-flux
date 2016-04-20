////////////////////////////////////////////////////////////////////////////////
// Excercise:
// - make these tabs work when you click them
////////////////////////////////////////////////////////////////////////////////
var React = require('react');
var ReactDOM = require('react-dom');
var assign = require('object-assign');

var DATA = [
  { name: 'USA', description: 'Land of the Free, Home of the brave' },
  { name: 'China', description: 'Lots of concrete' },
  { name: 'Russia', description: 'World Cup 2018!' },
];

var App = React.createClass({
  getInitialState () {
    return {
      activeTabIndex: 2
    }
  },

  handleTabClick (activeTabIndex) {
    this.setState({ activeTabIndex });
  },

  renderTabs () {
    return this.props.countries.map((country, index) => {
      var style = this.state.activeTabIndex === index ?
        styles.activeTab : styles.tab;
      var clickHandler = this.handleTabClick.bind(this, index);
      return (
        <div key={country.name} style={style}
          onClick={clickHandler}
        >
          {country.name}
        </div>
      );
    });
  },

  renderPanel () {

    var country = this.props.countries[this.state.activeTabIndex];
    return (
      <div>
        <p>{country.description}</p>
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

var styles = {};

styles.tab = {
  display: 'inline-block',
  padding: 10,
  margin: 10,
  borderBottom: '4px solid',
  borderBottomColor: '#ccc',
  cursor: 'pointer'
};

styles.activeTab = assign({}, styles.tab, {
  borderBottomColor: 'Red'
});

styles.tabPanels = {
  padding: 10
};

ReactDOM.render(<App countries={DATA}/>, document.body);
