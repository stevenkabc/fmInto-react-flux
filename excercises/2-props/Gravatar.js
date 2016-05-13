
var React = require('react');
var ReactDOM = require('react-dom');
var md5 = require('MD5');
var validateEmail = require('./validateEmail');

var GRAVATAR_URL = "http://gravatar.com/avatar";

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


var {number} = React.PropTypes;
var defaultPropCalls = 0;
var Gravatar = React.createClass({

  propTypes: {
    size: sizeType,
    loginID: emailType
  },

  getDefaultProps () {
    defaultPropCalls +=1;
    console.log("getDefaultProps called: count = " + defaultPropCalls)
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
module.exports = Gravatar;
