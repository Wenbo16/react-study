function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="www.google.com" onClick={handleClick}>
      Click me
    </a>
  );
}

ReactDOM.render(
  <ActionLink />,
  document.getElementById('app')
);