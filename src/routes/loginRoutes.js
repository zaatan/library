
const express = require("express");
const loginRouter = express.Router();

const Signupdata = require("../model/signupData");

const bcrypt = require('bcrypt');
const Logindata = require("../model/loginData");


function sandeep() {
    loginRouter.post('/add', function (req, res) {
        let username = req.body.username;
        let password = req.body.password;
        console.log(password);
        Signupdata.findOne(
            { 'username': username },
            function (err, user) {
                console.log(err);
                if (user) {
                    console.log(user);
                    bcrypt.compare(password, user.password)
                        .then((status) => {
                            if (status) {
                                console.log(status);
                                console.log('success');
                                req.session.user = user;

                                console.log('logged in');
                                res.redirect("/glass");

                            } else {
                                console.log('incorrect paasword');
                                res.render('login1')
                            }

                        })
                }
                else if (!user) {
                    Logindata.find({ 'username': username }, function (err, admin) {
                        if (admin) {
                            if (password === '12345') {
                                console.log('admin added');
                                res.redirect("/glass/admin");
                            } else {
                                console.log('password is not matching');
                                res.render('login');
                            }
                        } else {
                            console.log('not an admin');
                            res.render('login');
                        }
                    });
                } else {
                    console.log('user name or pass incorrect');
                    res.render('author1');
                }
            })


    })


    return loginRouter;
}

module.exports = sandeep;