const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerSchema = new Schema({
    username: { type:String,require:true},
    description:{type: String, require: true},
    duration:{ type: Number, require: true},
    date: {type: Date, require:true }
},
{
    timestamps: true
});

const exercise = mongoose.model('Exercise',exerSchema);

module.exports = exercise;