const express =require("express");
const session = require('express-session');


const app=express();

const port=process.env.PORT || 8080; 



const nav = [
   
    {
        link:'/author',
        name:'Authors'
    },
    {
        link:'/login1',
        name:'Login'
    },
    {
        link:'/signup1',
        name:'Signup'
    },
    {
        link:'/',
        name:'SignOut'
    }
  
];
const booksRouter =require('./src/routes/booksRoutes')(nav)
const authorRouter =require('./src/routes/authorRoutes')(nav)
const adminRouter =require('./src/routes/adminRoutes')(nav)
const signupRouter =require('./src/routes/signupRoutes')(nav)
const loginRouter =require('./src/routes/loginRoutes')(nav)


// app.use(passport.initialize()); 
// app.use(passport.session()); 

app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));
app.use(session({secret:"key",resave:false,saveUninitialized:true,cookie:{maxAge:1000000}}))
app.use('/admin',adminRouter);
app.use('/glass',booksRouter);
app.use('/author',authorRouter);
app.use('/signup1',signupRouter);
app.use('/login1',loginRouter);



app.set('view engine','ejs' );
app.set('views','./src/views');
app.get('/',(req,res)=>{
    res.render("login1",
    {
       nav,
        title:'Library'

    });
});
app.get('/login1',(req,res)=>{
    res.render("login1"
      );
});
app.get('/signup1',(req,res)=>{
    res.render("signup1"
      );
});
app.get('/admin',(req,res)=>{
    res.render("adminbooks"
      );
});


app.listen(port,()=>{console.log("server ready at "+port )});


