const express = require('express');
const Model = require('../models/userModel');

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.json(err);
    });
});
router.get('/getall', (req, res) => {
    Model.find({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });
});

// findone and find me ye difference hai ki findone me nhi milne pr null atta hai jbki find []
// then run krta hai jb data successful hota hai jbki catch when nhi milta 

// : denote url parameter
router.get('/getbyemail/:email',(req,res) => {
    console.log(req.params.email);
    Model.findOne({email : req.params.email})
    .then((result) => {
    res.json(result);
}).catch((err) => {
res.json(err);
});
});

router.get('/getbycity/:city',(req,res) => {
    console.log(req.params.city);
    Model.find({city : req.params.city})
    .then((result) => {
    res.json(result);
}).catch((err) => {
res.json(err);
});
});


router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
    .then((result) =>{
        res.json(result);
    }).catch((err) =>{
        res.json(err);
    });
});

router.get('/update', (req, res) => {
    res.send('response from user update')
});

router.get('/delete', (req, res) => {
    res.send('response from user delete')
});

module.exports = router;
