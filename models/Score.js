const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
    individualId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Individual'
    },
    result:{
        type: Number,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique:false,
        trim:true,
    },
},{
    timestamps:true
})

function getDemo () {
   
    const iSchema = scoreSchema;
   
    if (mongoose.models && mongoose.models.score) return mongoose.models.score
   
    return mongoose.model('score', iSchema)
  }
  const scoresc= getDemo()
  module.exports= scoresc;
  console.log(scoresc)