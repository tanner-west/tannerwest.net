var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');


app.use(express.static(path.join(__dirname + '/public')));
app.use('/projects', express.static(path.join(__dirname + '/public')));
app.use('/projects', express.static(path.join(__dirname + '/../hipster-blog/public')));
app.use('/projects', express.static(path.join(__dirname + '/../broth-and-butter/public')));




app.set('views', ['./views', '../hipster-blog/views', '../broth-and-butter/views']);
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

app.get('/projects/hip-blog', function (req, res){
	res.render('hipset');
});

app.get('/projects/broth-and-butter', function (req, res){
	res.render('broth-and-butter');
});

app.get('/dir', function (req, res){
	res.send('dirname is ' + __dirname + '/../hipster-blog/public');
});
 

app.listen(8080, function () {
  console.log('tannerwest.net is being served');
});

