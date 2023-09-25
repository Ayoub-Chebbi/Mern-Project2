const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    PartName : {type: String , required : true},
    PartImage : {type: String , required : true},
    PartCategory : {type: String , required : true},
    PartType : {type: String , required : true},
    PartPrice : {type: Number , required : true},
    PartDesc : {type: String , required : true},
    PartDate : {type: Date , required : true},
});

module.exports = mongoose.model("Car", carSchema);