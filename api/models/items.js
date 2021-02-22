const mongoose = require('mongoose');


const itemSchema = mongoose.Schema({
    id = mongoose.Schema.Types.ObjectId,
    name : {type : String, required : true},
    date : {type : Date, default : Date.now}
});


module.exports = mongoose.model('item', itemSchema);