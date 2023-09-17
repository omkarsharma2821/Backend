const express = require('express');
// const { Model } = require('mongoose');
const Model = require('../models/productModel');

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
    .then((result) =>{
        res.json(result);
    }).catch((err) =>{
        console.log(err);
        res.json(err);
    })
});

router.get('/getall', (req, res) => {
    Model.find({})
    .then((result) =>{
        res.json(result)
    }).catch((err) =>{
        res.json(err);
    })
});

router.get('/getbyid', (req, res) => {
    res.send('response from product getbyid')
});

router.get('/update', (req, res) => {
    res.send('response from product update')
});

router.get('/delete', (req, res) => {
    res.send('response from product delete')
});

module.exports = router;