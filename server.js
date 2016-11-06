var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var pages = {
'bio.html' : {
    title: 'bio',
    content:`<h3 class="bio">Bio</h3>
             <div class="name">
            <ul class="list">
           <li> Name : Akhil Philip</li><br>
            <li>D.O.B: 06/11/1991</li><br>
            <li> Age  : 24</li><br>
             <li>Sex  : Male</li><br>
            
           </ul> 
        </div> `
    
},
'contact.html' :{
    title: 'contact',
    content:`<h3 class="bio">Contact</h3>
        <div class="name">
             <ul class="list">
           <li> email : isaac4700@gmail.com</li><br>
            <li>Mob : 9846555982</li><br>
             <li>Address  : Kuttickal[H],Kanjirapara P.O,Devagiri</li><br>
            <li>City  : Kottayam</li><br>
            <li>State : Kerala</li><br>
            <li>Pin :686555</li>
            </ul>
 
        </div> `
},
'education.html' :{
    title:'education',
    content:`<h3 class="bio">Education</h3>
        <div class="name">
            <ul class="list">
            <li>College : St.Joseph college of
            communication</li><br>
            <li>University: M.G University</li><br>
            <li>Degree    : B.A</li><br>
            <li>Stream    : Multimedia</li><br>
            </ul>
        </div> `
    
},
'portfolio.html' :{
    title:'portfolio',
    content:`<h3 class="bio">Bio</h3>
        <div class="name">
             <p>
            <ul class="list">
           
            <li>Name : Akhil Philip</li><br>
           <li> D.O.B: 06/11/1991</li><br>
            <li>Age  : 24</li><br>
             <li>Sex  : Male</li><br>
            
            </ul>
        </div> `
},
'resume.html' :{
    title:'resume',
    content:` <h3 class="r">Resume</h3>
        <div class="r_img">
        <img class="resume" src="/ui/C.V-01.png" width="150" height="200" />
        </div>
        <a href="https://drive.google.com/open?id=0B0stNv7qCzZOMlJkVnNYQmtJU3c"> <button id="counter">Download</button>
       </a>

 </div>`
},
'comment.html' :{
    title:'comments',
    content:` <h3 class="r">Comments</h3>
        <div class="r_img">
        <div class="cmt">
        <input type="text" id="comment"  
        placeholder="comment here !" />
        </div>
        <input type="submit" value="Submit" id="submit_btn"  />
        <ul id="commentlist">
       
        
        
        </ul>
       </div> `
},
};
function createTemplate(data){
var title = data.title;
var content = data.content;
var htmlTemplate = `
    <html>
    <head>
        <title>
       ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>


<body>
<div class="cont">
<div class="header">
<a href="portfolio.html"><h1 class="txt">My Portfolio</h1></a>
<div class="srch">
<input type="text" placeholder="search" id="_srch"/>
<a href="https://www.google.co.in/"><img class="icon" src="/ui/search-icon-png-2.png" width="13" height="13" /></a>
</div>
<div class="logos">
<a href="https://www.facebook.com/isaac.philip.129"><img class="fb" src="/ui/fb-art.png" width="30" height="30" /></a> 
<a href="https://mail.google.com/mail/u/0/#inbox"><img class="gm" src="/ui/New_Logo_Gmail.svg.png" width="40" height="30" /></a>
<a href="https://in.linkedin.com/in/isaac0philip"><img class="in" src="/ui/linkedin.png" width="30" height="30" /></a>
</div> 
</div>
<div class="sub_head">

<div class="img_box">
  <img class="pic" src="/ui/IMG_20161010_202803.jpg" width="100" height="100" />
  
 </div>
 <div class="banner">
   <img class="b_img" src="/ui/Portfolio.jpg" /> 
   </div>
 
 
 
  </div>
  
 <div class="left">
<a href="bio.html"><div class="nav1">Bio
</div></a>
<a href="education.html"><div class="nav2">Education
</div></a>
<a href="resume.html"><div class="nav3">Resume
</div></a>
<a href="contact.html"><div class="nav4">Contact
</div></a>
<a href="comment.html"><div class="nav5">Comments
</div></a>  
  
 </div>
 <div class="content">
  ${content}
  
 
 </div>
 
  
</div>
</body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:pageName',function(req, res){
    var pageName = req.params.pageName;
    res.send(createTemplate(pages[pageName]));
});

var counter = 0;
app.get('/counter',function(req,res){
	counter = counter+1;
	res.send(counter.toString());
	
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
