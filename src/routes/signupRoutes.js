const express = require("express");
const signupRouter = express.Router();
const Signupdata = require('../model/signupData');
const bcrypt = require('bcrypt');


function router(nav) {
    signupRouter.post('/add',async function (req, res) {

        var item = {
            name: req.body.name,
            username: req.body.username,
            number: req.body.number,
            password: req.body.password
        }
        item.password=await bcrypt.hash(item.password,10);
        console.log(item.password);

        var storing = Signupdata(item);

        storing.save(); // saving to database
        res.redirect('/glass');

    })


    return signupRouter;
}
module.exports = router;