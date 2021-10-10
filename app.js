const express =require("express");



const app=express();
const port=process.env.PORT || 8080; 



const nav = [
    {
        link:'/glass',
        name:'Books'
    },
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
    }
];
const booksRouter =require('./src/routes/booksRouter')(nav);
const authorRouter =require('./src/routes/authorRouter')(nav);



app.use(express.static(__dirname+'/public'));
app.use('/glass',booksRouter);
app.use('/author',authorRouter);

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
app.get('/sandeep',(req,res)=>{
    res.render("sandeep"
      );
});

app.listen(port,()=>{console.log("server ready at "+port )});


