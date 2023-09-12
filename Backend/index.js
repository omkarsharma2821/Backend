// import express

const express = require('express');

//intialize express

const app = express();
const port = 5000;

app.get('/', () => (req, res) => {
res.send('resposnse from express');
});
app.get('/home', () => (req, res) => {
res.send('resposnse from home');
});
app.get('/add', () => (req, res) => {
res.send('resposnse from add');
});
app.get('/getall', () => (req, res) => {
res.send('resposnse from getall');
});

app.listen(port, () => {
    console.log('server started');
});
