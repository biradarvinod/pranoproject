const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const config=require('../config/database');

const TrainerSchema1=mongoose.Schema({
    fname:{
        type:String
    },
    lname:{
        type:String
    },
    dob:{
       type:String
    },
    address:{
        type:String
    },
    // resume:{
    //     type:String
    // },
    // demovideo:{
    //     type:String
    // },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number
    },
    password:{
        type:String
    },
    // inlineRadioOptions:{
    //   type:String
    // },
    // skills:{
    //     type:String
    // },
    experience:{
        type:String
    },
    iuploadname: {
        type: String,
        required: true,
    },
    ioriginalname: {
        type: String,

    },
    videoname:{
        type:String,
        required:true
    },
    videoorgname:{
        type:String
    }
});

const Trainer1=module.exports=mongoose.model('Trainer1',TrainerSchema1);

module.exports.getUserById=function(id,callback)
{
    Trainer1.findById(id,callback);
}

module.exports.getUserByUsername=function(email,callback)
{
    const query={email:email}
    Trainer1.findOne(query,callback);
}

module.exports.addTrainer=function(newTrainer,callback)
{
    bcrypt.genSalt(10,(err,salt)=>
    {
        bcrypt.hash(newTrainer.password,salt,(err,hash)=>
        {
            if(err) throw err;
            newTrainer.password=hash;
            newTrainer.save(callback);
        });
    });
}

module.exports.comparePassword=function(trainerPassword,hash,callback)
{
    bcrypt.compare(trainerPassword,hash,(err,isMatch)=>
    {
        if(err) throw err;
        callback(null,isMatch);
    })
}