const React = require('react');
const ReactDOM = require('react-dom');
const ContentToggle = require('./ContentToggle')
//
//

const App = React.createClass({


  getInitialState () {
    return {
      toggleAll: false,
      toggleStates : {
        jerk: false,
        taco: false
      }
    }
  },

  toggleAll () {
    var {toggleStates, toggleAll } = this.state;
    var newStates = Object.keys(toggleStates)

    .reduce((newStates, key) => {
      console.log(key,newStates);
      newStates[key] = !toggleAll;
      return newStates;
    }, {});
    this.setState({
      toggleAll: !toggleAll,
      toggleStates: newStates
    })
  },

  handleToggle (id) {
    var { toggleStates } = this.state;
    toggleStates[id] = !toggleStates[id]
    this.setState({toggleStates});
    var keys = Object.keys(toggleStates);
    var areOpen = keys.filter(key => toggleStates[key]);
    if (areOpen.length === keys.length) {
      this.setState({ toggleAll: true});
    }
    else if (areOpen.length === 0) {
      this.setState({ toggleAll: false});
    }

  },
  render() {
    return (
      <div>
        <h1>Props vs State</h1>
        <button onClick={this.toggleAll}>Toggle All</button>
        <div style={{margin: '10px 0'}}>
          <ContentToggle
            summary="Jerk Chicken"
            onToggle={this.handleToggle.bind(this, 'jerk')}
            isOpen={this.state.toggleStates.jerk}
          >
            <p>It was delicious</p>
          </ContentToggle>

          <ContentToggle
            summary="Tacos"
            onToggle={this.handleToggle.bind(this, 'taco')}
            isOpen={this.state.toggleStates.taco} >
            <p>Spicy Hot</p>
          </ContentToggle>
        </div>

      </div>
    )
  }
})

ReactDOM.render(<App/>, document.getElementById('Steven1'))
