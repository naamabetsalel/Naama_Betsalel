// import and init
const express = require('express'); // import the express - so you can work with it
const app = express(); // start the express
const path = require ("path");
const port = 2020;
app.use (express.static(path.join(__dirname, "static")));

// routing - טיפול בנתיבים  URL is a route 
app. get('/', function (req, res){
console.log("This is the body", req.query); 
res.sendFile(path.join(__dirname, "/views/index.html"))

});
app.use(express.urlencoded({ extended: true }));
app.get ("/page2",(req,res)=>{
    console.log ('This is the body:       ', rew.params);
res.sendFile(path.join(__dirname,"/views/index.html")) // dirname - goes to the file in the computer the program is running on

});
app.post('/submit', (req, res) => {
    res.send('Thank you');
  });
app.get('/page3', (req,res)=>{
res.sendFile(path.join(__dirname, "/views/page3.html"))
});


// set up listen - set the domain
app.listen(port , ()=> {
    console.log("server is running on port", port)
});

app.get('/index', (req, res) => {
    console.log("This is the body", req.query); 
res.sendFile(path.join(__dirname, "views/index.html"))

});


app.get('/', (req,res)=>{
    //res.send("Hi Day 8!!");
    res.sendFile(path.join(__dirname, "views/index.html"))
});

app.get('/formhandler', CRUD.createNewUser);

app.post('/formB', CRUD.searchUser);

app.get('/activUser', (req ,res)=>{
    res.send("hi " + req.cookies.name_user);
    })

app.get('/selctAllUsers', CRUD.selectAllUsers);

app.get('/createTable', CRUD.createTable);

app.get('/dropTable', CRUD.dropTable);

// set up listen
app.listen(port, ()=>{
    console.log("server is running on port", port);
});