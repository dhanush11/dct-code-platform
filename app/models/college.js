const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const collegeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    details: {
        type: String
    },
    city: {
        type: Schema.Types.ObjectId,
        ref: 'City'
    }
});
const College = mongoose.model('College',collegeSchema);
module.exports = {
    College
}