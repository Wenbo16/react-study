// You can embed any JavaScript expression in JSX by wrapping it in curly braces.


const user = {
	firstName: 'Ming',
	lastName: 'Xiao'
};


function formatName(user) {
	return user.firstName + ' ' + user.lastName;
}

// JSX
const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);


ReactDOM.render(
	element,
	document.getElementById('app')
);