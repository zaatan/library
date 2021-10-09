const express = require("express");
const booksRouter = express.Router();

function router(nav) {




    var books = [
        {
            img: "neermathalam.jpeg",
            title: 'Neermathalam Poothakaalam',
            author: 'Madhavi Kuttiyamma',
            genre: 'Memoirs',
            about:'A book which bears the flowering memories of life. Neermathalam Pootha Kalam is a collection of cherished memories which gives a nostalgic effect to the readers. It is a memoir by Madhavikkutty.'

        },
        {
            img: "nagan.jpg",
            title: 'dhurandham',
            author: 'Amish Tripathi',
            genre: 'Fiction',
            about:'Naganmarude Rahasyam is the Malayalam version of The Secret of the Nagas, the second book of the Shiva Trilogy by Amish. It is translated by Rajan Thuvara. ... A people held to ransom for a miracle drug made only by the Nagas.'

        },
        {
            img: "itoo.jpg",
            title: 'Tom and jerry',
            author: 'Ravinder Singh',
            genre: 'Romance',
            about:'In Delhi, Ravin meets Khushi and her family including her mother and sisters and then starts his journey to the US. Even during his stay in the US, Ravin is constantly in touch with Khushi. After his return to India, Ravin meets Khushi once again.'
        },
        {
            img: "thesee.jpeg",
            title: 'Tom and jerry',
            author: 'KR Meera',
            genre: 'Romance',
            about:'The Unseeing Idol of Light is a haunting tale that explores love and loss, blindness and sight, obsession and suffering-and the poignant interconnections between them. One fateful day, Deepti vanishes mysteriously. Baffled by her disappearance and consumed with grief, Prakash, her husband, loses his eyesight.'
        },
    ];

    booksRouter.get('/', (req, res) => {
        res.render("glass",
            {
                nav,
                title: 'Library',
                books

            });
    });
    booksRouter.get('/addbooks', (req, res) => {
        res.render("addbooks",
            {
                nav,
                title: 'Library',
                books

            });
    });
    booksRouter.get('/add', (req, res) => {
        res.send("  Book added successfully  ");
    });

    // booksRouter.get('/single',(req,res)=>{
    //     res.send("hai hallo how r u")
    // });
    booksRouter.get('/:id', (req, res) => {
        const id = req.params.id;
        res.render("glassbook", {
           nav,
            title: 'Library',
            book: books[id]
        })
    });
    return booksRouter;
}
module.exports = router;