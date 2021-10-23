const express = require('express');
const adminRouter = express.Router();
const Bookdata = require('../model/Bookdata');
const Multer = require('multer');
const Authordata = require('../model/authordata');
const fs=require('fs');

// var storage =Multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,"/public/images");
//     },
//     filename:function(req,file,cb){
//         cb(null,file.fieldname+"_"+Date.now()+"_"+file.originalname);
//     },
// });
// var upload =Multer({
//     storage:storage
// }).single("image");


function router(nav) {
    var storage = Multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "./public/images");
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
        },
    });
    var upload = Multer({
        storage: storage
    }).single("image");
    adminRouter.get('/', function (req, res) {
        res.render('addbooks', {
            nav,
            title: 'Library'

        });


    })
    adminRouter.get('/author', function (req, res) {
        res.render('addauthor', {
            nav,
            title: 'Library'

        });


    })
    adminRouter.get('/editbook', function (req, res) {
        Bookdata.find().then(function (books) {
            res.render("admin/adminbooks",
                { user:{name:'Admin'},
                    nav,
                    title: 'Library',
                    books
                    

                });
        })


    })
    adminRouter.get('/updatebook/:id', function (req, res) {
        let id=req.params.id;
        Bookdata.findOne({_id:id}).then(function (book) {
            res.render("admin/editbook",
                { user:{name:'Admin'},
                    nav,
                    title: 'Library',
                    book
                    

                });
        })


    })
    adminRouter.get('/updateauthor/:id', function (req, res) {
        let id=req.params.id;
        Authordata.findOne({_id:id}).then(function (author) {
            res.render("admin/editauthor",
                { user:{name:'Admin'},
                    nav,
                    title: 'Library',
                    author
                    

                });
        })


    })
    adminRouter.post('/add', upload, function (req, res) {

        var item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.file.filename
        }
        var book = Bookdata(item);
        book.save(); // saving to database
        Bookdata.find().then(function (books) {
            res.render("admin/adminbooks",
                { user:{name:'Admin'},
                    nav,
                    title: 'Library',
                    books
                    

                });
        })

    })
    adminRouter.post('/addauthor', upload, function (req, res) {

        var item = {
            name: req.body.name,
            description: req.body.description,
           
            image: req.file.filename
        }
        var book = Authordata(item);
        book.save(); // saving to database
        Authordata.find().then(function (books) {
            res.render("admin/adminbooks",
                { user:{name:'Admin'},
                    nav,
                    title: 'Library',
                    books
                    

                });
        })

    })
    adminRouter.post('/updatebook/:id',upload,(req, res) => {
        let id = req.params.id;
        let new_image = "";
        if(req.file){
            new_image = req.file.filename;
            try{
                fs.unlinkSync('./public/images/' + req.body.old_image);
            }
            catch(err){
                console.log(err);
            }
        } else{
            new_image = req.body.old_image;
        }
    
        let item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: new_image
        }
        
    Bookdata.findByIdAndUpdate({_id:id},item)
    .then((response)=>{
        if(response){  
            res.redirect('/admin/editbook'); 
       }
    })
    
    });
    adminRouter.post('/updateauthor/:id',upload,(req, res) => {
        let id = req.params.id;
        let new_image = "";
        if(req.file){
            new_image = req.file.filename;
            try{
                fs.unlinkSync('./public/images/' + req.body.old_image);
            }
            catch(err){
                console.log(err);
            }
        } else{
            new_image = req.body.old_image;
        }
    
        let item = {
            name: req.body.name,
            description: req.body.description,
            
            image: new_image
        }
        
    Authordata.findByIdAndUpdate({_id:id},item)
    .then((response)=>{
        if(response){  
            res.redirect('/admin/editauthor'); 
       }
    })
    
    });
   

    
    
    adminRouter.get('/:id', (req, res) => {

        const id = req.params.id;
        Bookdata.findOne({ _id:id })
            .then((book) => {
                res.render("admin/adminsinglebook", {
                    user:{name:'Admin'},
                    nav,
                    title: 'Library',
                    book
                });

            })

    });
    


    return adminRouter;
}
module.exports = router;
