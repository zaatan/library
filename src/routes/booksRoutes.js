const express = require("express");
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');

function router(nav) {



    booksRouter.get('/', (req, res) => {
        Bookdata.find().then(function (books) {
            console.log(req.session.user);
            res.render("glass",
                { user:req.session.user,
                    nav,
                    title: 'Library',
                    books
                    

                });
        })

    });
    booksRouter.get('/addbooks', (req, res) => {
        res.render("addbooks",
            {
                nav,
                title: 'Library',
                books

            });
    });
    booksRouter.get('/admin', (req, res) => {
        Bookdata.find().then(function (books) {
            res.render("admin/adminbooks",
                { user:{name:'Admin'},
                    nav,
                    title: 'Library',
                    books
                    

                });
        })

    });
    
    booksRouter.post('/add', (req, res) => {



    });



   


    booksRouter.get('/:id', (req, res) => {

        const id = req.params.id;
        Bookdata.findOne({ _id:id })
            .then((book) => {
                res.render("glassbook", {
                    nav,
                    title: 'Library',
                    book
                });

            })

    });
   
    booksRouter.get('/deletebook/:id', function(req, res) {
        
        Bookdata.findByIdAndRemove(req.params.id, function(err, project) {
            if (err) {
                res.redirect('/admin/editbook');
            } else
            {
                res.redirect('/admin/editbook');
            }
        });
    });
    
    return booksRouter;
}

module.exports = router;