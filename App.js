//nested elements
const parent = React.createElement(
  'div',
  { id: 'parent' },

  [
    React.createElement('div', {}, [
      React.createElement('h1', {}, 'Im h1 tag'),
      React.createElement('h2', {}, 'Im h2 tag'),
    ]),
    React.createElement('div', {}, [
      React.createElement('h1', {}, 'Im h1 tag'),
      React.createElement('h2', {}, 'Im h2 tag'),
    ]),
  ]
);

// const heading = React.createElement(
//   'h1',
//   { id: 'heading' },
//   'React JS form react'
// );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
console.log(parent);
