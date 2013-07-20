var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());


app.get('/', function(request, response) {
	//response.send('Hello World2!');
	var read_index = fs.readFileSync('index.html');
	var content = read_index.toString('utf-8');
	response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
