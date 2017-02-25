var express = require('express');
var app = express();
app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function (req, res){
	res.render('index');
});


app.get('/projects', function (req, res){
	res.render('projects');
});
app.get('/blog', function (req, res){
	res.render('blog');
});


app.listen(8080, function () {
  console.log('tannerwest.net is being served');
});

