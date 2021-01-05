const path = require("path");
const express = require('express');
const multer = require("multer");
const fs = require('fs');
const mkdirp = require("mkdirp");
const http = require("http");

const app = express();

app.get("/", express.static(path.join(__dirname, "/public")));

app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

//set Storage Engine
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public'),
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
})

app.listen(8001, () => {
    console.log('Server running port 8001');
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000 //give no. of bytes
    },
}).single('uploadFile');

function uploadFile(req, res) {
    upload(req, res, (err) => {
        if (err) {
            //Send error msg
            console.log(err);
            res.send(err);
        } else {
            res.send('Successful');
            console.log('file uploaded succcessfully');
        }
    });
}

app.post('/upload', function(req, res) {
    uploadFile(req, res);
})

app.get('/test.js', (req, res) => {
    res.sendFile(__dirname + '/test.js');
})

module.exports = {
    uploadFile
}