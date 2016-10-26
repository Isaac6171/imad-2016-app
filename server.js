var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/portfolio.html',function(req, res){
    res.sendFile(path.join(__dirname,'ui', 'portfolio.html'));
});
app.get('/bio.html',function(req, res){
    res.sendFile(path.join(__dirname,'ui', 'bio.html'));
});
app.get('/education.html',function(req, res){
    res.sendFile(path.join(__dirname,'ui', 'education.html'));
});
app.get('/resume.html',function(req, res){
    res.sendFile(path.join(__dirname,'ui', 'resume.html'));
});
app.get('/contact.html',function(req, res){
    res.sendFile(path.join(__dirname,'ui', 'contact.html'));
});




app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/photo-01.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'photo-01.png'));
});
app.get('/ui/linkedin.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'linkedin.png'));
});
app.get('/ui/New_Logo_Gmail.svg.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'New_Logo_Gmail.svg.png'));
});
app.get('/ui/fb-art.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'fb-art.png'));
});
app.get('/ui/search-icon-png-2.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'search-icon-png-2.png'));
});
app.get('/ui/IMG_20161010_202803.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'IMG_20161010_202803.jpg'));
});
app.get('/ui/Portfolio.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Portfolio.jpg'));
});
app.get('/ui/C.V-01.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'C.V-01.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
