////////////////////////////////////////////////////////////////////////////////
// Excercise:
//
// http://facebook.github.io/react/docs/reusable-components.html#prop-validation
//
// - Don't access `USERS` directly in the app, use a prop
// - Validate Gravatar's `size` property, allow it to be a
//   a number, or a string that can be converted to a number,
//   ie: `size="asdf"` should warn (hint: parseInt)
// - in emailType, what if the prop name isn't email? what if we wanted
//   the prop to be "userEmail" or "loginId"? Switch the Gravatar
//   prop name from "email" to "loginId", send a bad value, and then
//   fix the code to make the warning make sense.
// - how many times does `getDefaultProps` get called?
// - experiment with some of the other propTypes, send improper values
//   and look at the messages you get
////////////////////////////////////////////////////////////////////////////////

var React = require('react');
var ReactDOM = require('react-dom');
var Gravatar = require('./Gravatar');

// var warning = require('react/lib/warning');


var USERS = [
  { id: 1, name: 'Ryan Florence', loginID: 'rpflorence@gmail.com' },
  { id: 2, name: 'Michael Jackson', loginID: 'mjijackson@gmail.com' },
  { id: 3, name: 'Steven Elliot', loginID: 'stevenelliot@redwood6.com'}
];
var defaultPropCalls = 100;
var {object, arrayOf } = React.PropTypes;
var App = React.createClass({
  propTypes: {
    users: arrayOf(object).isRequired
  },
  getDefaultProps () {
    defaultPropCalls += 1;
    console.log("In App: defaultPropCalls = " + defaultPropCalls);
    return {

    }
  },
  render () {
    var users = this.props.users.map((user) => {
      console.log(user);
      return (
        <li key={user.id}>
          <Gravatar loginID={user.loginID}  /> {user.name}
        </li>
      );
    });
    console.log(users);
    return (
      <div>
        <h1>Users</h1>
        <ul>{users}</ul>
      </div>
    );
  }
});

ReactDOM.render(<App users={USERS} />, document.getElementById('App1'));

//require('./tests').run(Gravatar, emailType);
