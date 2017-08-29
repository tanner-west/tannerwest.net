var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var http = require('http');


app.use(express.static(path.join(__dirname + '/public')));
app.use('/projects', express.static(path.join(__dirname + '/public')));
app.use('/projects', express.static(path.join(__dirname + '/../hipster-blog/public')));
app.use('/projects', express.static(path.join(__dirname + '/../broth-and-butter/public')));
app.use('/projects', express.static(path.join(__dirname + '/../moo-cow-lounge/public')));
app.use('/projects', express.static(path.join(__dirname + '/../tnbbq/public')));
app.use('/blog', express.static(path.join(__dirname + '/public')));







app.set('views', ['./views', '../hipster-blog/views', '../broth-and-butter/views', '../moo-cow-lounge/views', '../tnbbq/views']);
app.set('view engine', 'pug');

app.get('/', function (req, res){
	res.redirect(302, '/projects');
});




app.get('/projects', function (req, res){
const options = {
	  hostname: 'appalcorps.com',
	  port: 80,
	  path: '/twnet/wp-json/wp/v2/projects',
	  method: 'GET',
	  };
	let wpContent = "";  
	const wpReq = http.request(options, (wpRes) => {
	  console.log(`STATUS: ${wpRes.statusCode}`);
	  console.log(`HEADERS: ${JSON.stringify(wpRes.headers)}`);
	  wpRes.setEncoding('utf8');
	  wpRes.on('data', (chunk) => {
	    wpContent += chunk;
	  });
	  wpRes.on('end', () => {
	    console.log('No more data in response.');
	    console.log(`wp content is ${wpContent}`);
	    wpContent = JSON.parse(wpContent);
	    res.render('projects', {wpContent: wpContent});

	  });
	});

	wpReq.on('error', (e) => {
	  console.error(`problem with request: ${e.message}`);
	});

	wpReq.end();});
app.get('/blog', function (req, res){
	const options = {
	  hostname: 'appalcorps.com',
	  port: 80,
	  path: '/twnet/wp-json/wp/v2/posts',
	  method: 'GET',
	  };
	let wpContent = "";  
	const wpReq = http.request(options, (wpRes) => {
	  console.log(`STATUS: ${wpRes.statusCode}`);
	  console.log(`HEADERS: ${JSON.stringify(wpRes.headers)}`);
	  wpRes.setEncoding('utf8');
	  wpRes.on('data', (chunk) => {
	    wpContent += chunk;
	  });
	  wpRes.on('end', () => {
	    wpContent = JSON.parse(wpContent);
	    res.render('blog', {wpContent: wpContent});

	  });
	});

	wpReq.on('error', (e) => {
	  console.error(`problem with request: ${e.message}`);
	});

	wpReq.end();
});

app.get('/blog/codestock-2017-speakers', function (req, res){
	res.render('codestock-2017-speakers');
});

app.get('/contact', function (req, res){
	res.render('contact');
});

app.get('/projects/hip-blog', function (req, res){
	res.render('hipset');
});

app.get('/projects/broth-and-butter', function (req, res){
	res.render('broth-and-butter');
});

app.get('/projects/moo-cow-lounge', function (req, res){
	res.render('moo-cow-lounge');
});

app.get('/projects/tnbbq', function (req, res){
	res.render('map');
});

app.get('/dir', function (req, res){
	res.send('dirname is ' + __dirname + '/../hipster-blog/public');
});
 

app.listen(8080, function () {
  console.log('tannerwest.net is being served');
});

