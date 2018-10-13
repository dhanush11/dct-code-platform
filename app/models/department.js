const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const departmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    contactInfo: {
        type: String,
        required: true
    },
    details: {
        type: String        
    },
    college: [{
        type: Schema.Types.ObjectId,
        ref: 'College'
    }]
}); 
const Department = mongoose.model('Department',departmentSchema);
module.exports = {
    Department
}