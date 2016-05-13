const React = require('react');
const ReactDOM = require('react-dom');
const ContentToggle = require('./ContentToggle')
//
//

const App = React.createClass({
  getInitialState () {
    return {
      toggleAll: true,
      toggleStates : {
        jerk: false,
        taco: true
      }
    }
  },

  toggleAll () {
    this.setState({
      toggleAll: !this.state.toggleAll,
      toggleStates: {
        jerk: !this.state.toggleStates.jerk,
        taco: !this.state.toggleStates.taco,
      }
    })
  },
  handleToggle (id) {
    var { toggleStates } = this.state;
    toggleStates[id] = !toggleStates[id]
    this.setState({toggleStates})
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
