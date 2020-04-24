const mainElement = document.getElementById("app");

// use JSX or createElement()

// Elements are the smallest building blocks of React apps.
// Elements are what components are “made of”
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);


ReactDOM.render(React.createElement(HelloMessage), mainElement);

ReactDOM.render(
  <HelloMessage name="John" />,
  document.getElementById('example')
);