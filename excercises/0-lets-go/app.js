const React = require('react');
const ReactDOM = require('react-dom');

const fetchUsers = (cb) => {
  setTimeout( () => {
    cb([{name: 'Steven'}, {name: 'Bruce'}, {name: 'Al'}])

  }, 1500);
  return
};

const App = React.createClass({
  getInitialState () {
    return {
      users: [],
      loaded: false
    }
  },

  componentDidMount() {
    fetchUsers((users) => {
      this.setState({
        users,
        loaded: true
      }) } );
  },

  render () {
    if(!this.state.loaded)
      return <div>Loading</div>

    const users = this.state.users.map((user) => {
      return <li>{user.name}</li>;
    })

    return (
      <div>
        <h1>Hello</h1>
          <ul> {users}</ul>
      </div>
    )
  }
});

ReactDOM.render(<App/>, document.body);
