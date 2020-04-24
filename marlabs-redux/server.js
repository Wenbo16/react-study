var express = require('express'),
	app = express(),
	cors = require('cors'),
	bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.json());

var users = [
        {username : 'User 1', location:'Location 1'},
        {username : 'User 2', location:'Location 2'},
        {username : 'User 3', location:'Location 3'},
        {username : 'User 4', location:'Location 4'}
	]

app.get('/getusers', function(req, res){
	setTimeout(function(){
		res.send(users);
	}, 2000)
})

app.post('/deleteuser', function(req, res){
	var user = req.body.user;
	users = users.filter(item => 
        item.username !== user.username
    );	
    console.log(users);
	setTimeout(function(){
		res.send(users);
	}, 2000)
})

app.listen(2000, function() {
	console.log('Server running @ localhost:2000');
});