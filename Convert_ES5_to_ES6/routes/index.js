//const express = require('express');
import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Hello world 2' });
});

export default router;
//module.exports = router;