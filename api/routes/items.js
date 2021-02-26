const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { response } = require('../../app');
const Item = require('../models/items');
//access public : get all elements
router.get("/", (req, res, next) => {
    Item.find().sort({date : -1}).select('_id name date').then(items => {
        res.status(200).json(items);
    })
})

router.post("/", (req, res, next) => {
    const item  = new Item({
        _id : mongoose.Types.ObjectId(),
        name : req.body.name
    });
    item.save().then(result => {
        res.status(201).json({
            message : 'Item was Added',
            data : {
                _id : item._id,
                name : item.name,
                date : result.date
            }
        });
    }).catch(err => {
        res.status(500).json({
            error : err
        });
    })
})


router.delete("/:itemId", (req, res, next) => {
    const id = req.params.itemId;
    Item.findById(id).then(item => {
        if(item){
            Item.remove({_id : id}).then(result => {
                res.status(200).json({
                    message : "Item Was Deleted"
                });
            }).catch(err => {
                res.status(500).json({error : err});
            });
        }
        else res.status(404).json({
            message : 'Not Found'
        });
    }).catch(err => {
        res.status(500).json({error : err});
    })
})
module.exports = router;