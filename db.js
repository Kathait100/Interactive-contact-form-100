const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactdatabase',
 {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
     console.log('Connection Established')
 }).catch((error)=>{
     console.log('Something Went Wrong'+ error);
 })