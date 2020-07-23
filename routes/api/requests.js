const express = require('express');
const router = express.Router();

// Request model
const Request = require('../../models/Request');


//@route GET api/items
//@desc Get all items
//@access public

router.get('/', (req, res) => {
    Request.find()
    .sort({date: 1})
    .then(requests => res.json(requests));
});

//@route POST api/items
//@desc Create request
//@access public

router.post('/', (req, res) => {
    const newRequest = new Request({
        name: req.body.name,
        type: req.body.type
    });
    newRequest.save().then(request => res.json(item));
});


module.exports =  router;