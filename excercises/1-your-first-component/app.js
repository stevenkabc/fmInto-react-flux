////////////////////////////////////////////////////////////////////////////////
// Excercise:
//
// Render `DATA` to the page
// - put the title in an h1
// - only render mexican food (hint: arrays have a "filter" method)
// - sort the items in alphabetical order by name
//   (might want to use `sort-by` https://github.com/staygrimm/sort-by#example)
////////////////////////////////////////////////////////////////////////////////

var React = require('react');
var ReactDOM = require('react-dom');
var sortBy = require('sort-by');

var DATA = {
  title: 'Menu',
  items: [
    { id: 1, name: 'tacos', type: 'mexican' },
    { id: 2, name: 'burrito', type: 'mexican' },
    { id: 3, name: 'tostada', type: 'mexican' },
    { id: 4, name: 'hush puppies', type: 'southern' }
  ]
};

var Menu = React.createClass({
  getInitialState () {
    return (DATA)
  },
  render () {
    const items = this.state.items.filter( (item) => {
      return item.type === 'mexican'
    })
    .sort(sortBy('name'))
    .map( (item) => {
      return <li key={item.id}>{item.name} </li>
    })
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h2>{items}</h2>
      </div>
    );
  }
});

ReactDOM.render(<Menu/>, document.getElementById('App1'), () => {
  require('./tests').run();
});
