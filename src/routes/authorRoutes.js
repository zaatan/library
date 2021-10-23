const express = require("express");
const authorRouter = express.Router();
const Authordata = require('../model/authordata');


function author(nav) {




   
    authorRouter.get('/', (req, res) => {
        Authordata.find().then(function (books) {
            console.log(req.session.user);
            res.render("glassauthor",
                { user:req.session.user,
                    nav,
                    title: 'Library',
                    books
                    

                });
        })
    });
    authorRouter.get('/addauthors', (req, res) => {
        res.render("addauthor",
            {
                nav,
                title: 'Library',
                books

            });
    });
    authorRouter.get('/admin', (req, res) => {
        Authordata.find().then(function (books) {
            res.render("admin/adminauthorpage",
                { user:{name:'Admin'},
                    nav,
                    title: 'Library',
                    books
                    

                });
        })

    });
   
    
    authorRouter.get('/:id', (req, res) => {
        const id = req.params.id;
        res.render("glassauthor1", {
            nav,
            title: 'Library',
            book: books[id]
        })
    });
    return authorRouter;
}
module.exports = author;