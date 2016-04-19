const React = require('react');
const ReactDOM = require('react-dom');


const ContentToggle = React.createClass({
  getInitialState () {
    return {
      showDetails: false
    };
  },
  renderDetails () {
    const showStuff = this.state.showDetails;
    if(showStuff)
      return this.props.children;
    else
      return null;
  },
  toggle () {
    this.setState({
      showDetails: !this.state.showDetails
    })
  },
  render() {
    var summaryClassName = "ContentToggle__Summary";
    if (this.state.showDetails) {
      summaryClassName += " ContentToggle__Summary--open";
    }
    return (
      <div className="ContentToggle">
        <div onClick={this.toggle} className={summaryClassName}>
          {this.props.summary}
        </div>
        <div className="ContentToggle__Details">
          {this.renderDetails()}
        </div>
      </div>
    )
  }
})

const App = React.createClass({
  render() {
    return (
      <div>
        <ContentToggle summary="Jerk Chicken">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </ContentToggle>
      </div>
    )
  }
})

ReactDOM.render(<App/>, document.body)
