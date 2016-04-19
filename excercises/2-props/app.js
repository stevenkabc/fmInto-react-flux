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
var md5 = require('MD5');
var validateEmail = require('./validateEmail');
// var warning = require('react/lib/warning');

var GRAVATAR_URL = "http://gravatar.com/avatar";

var USERS = [
  { id: 1, name: 'Ryan Florence', loginID: 'rpflorence@gmail.com' },
  { id: 2, name: 'Michael Jackson', loginID: 'mjijackson@gmail.com' }
];
var emailType = (props, propName, componentName) => {
 if (!validateEmail(props[propName])) {
   return new Error(
     `Invalid loginID '${props[propName]}' sent to 'Gravatar'. Check the render method of '${componentName}'.`
   );
 }
};
var sizeType = (props, propName, componentName) => {
  if ( isNaN(parseInt(props.size)) ) {
   return new Error(
     `Invalid size '${props[propName]}' sent to 'Gravatar'. Check the render method of '${componentName}'.`
   );
 }
};


var {number} = React.PropTypes
var Gravatar = React.createClass({

  propTypes: {
    size: sizeType,
    loginID: emailType
  },

  getDefaultProps () {
    return {
      size: "36"

    };
  },

  render () {
    var { loginID, size } = this.props;
    var hash = md5(loginID);
    var url = `${GRAVATAR_URL}/${hash}?s=${size*2}`;
    return <img src={url} width={size} />;
  }
});
var {object, arrayOf } = React.PropTypes
var App = React.createClass({
  propTypes: {
    users: arrayOf(object).isRequired
  },
  getDefaultProps () {
    return {

    }
  },
  render () {
    var users = this.props.users.map((user) => {
      return (
        <li key={user.id}>
          <Gravatar loginID={user.loginID} size={36} /> {user.name}
        </li>
      );
    });
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
