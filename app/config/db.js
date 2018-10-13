const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/dct_code_platform';

mongoose.connect(CONNECTION_URI,{useNewUrlParser: true}).then(()=>{
    console.log('connected to db')
}).catch((err) => {
    console.log(err)
});
mongoose.set('useCreateIndex',true);
module.exports = {
    mongoose
}