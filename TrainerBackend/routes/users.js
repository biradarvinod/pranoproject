const express = require('express');
const router = express.Router();
const Trainer1=require('../models/traineruser');
const config=require('../config/database');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const multer=require('multer');


router.post('/trainerRegister', (req, res, next) => {
    let newTrainer = new Trainer1({
        fname: req.body.fname,
        lname: req.body.lname,
        dob:req.body.dob,
        address: req.body.address,
        // resume: req.body.resume,
        // demovideo: req.body.demovideo,
        email: req.body.email,
        mobile: req.body.mobile,
        password: req.body.password,
        // inlineRadioOptions:req.body.inlineRadioOptions,
        // skills: req.body.skills,
        experience: req.body.experience,
        iuploadname: req.body.iuploadname,
        ioriginalname: req.body.ioriginalname,
        videoname:req.body.videoname,
        videoorgname:req.body.videoorgname
    });
    Trainer1.addTrainer(newTrainer,(err,reguser)=>{
        if(err)
        {
         res.json({success:false,msg:'Failed to Register Trainer'});  
        }
        else{
            res.json({success:true,msg:'Trainer Registration Successfull'})
        }
    });
});


const istorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/resumes')
    },
    filename: function (req, file, cb) {
        //cb(null, file.originalname);
        var date = Date.now();
        cb(null, date + file.originalname);
    }
});
const iupload = multer({
    storage: istorage
});


//upload file
router.post('/uploadImage', iupload.any(), function (req, res, next) {
    // console.log(req.files[0].location);
  // return res.json({ filePath:req.files[0].location });
    return res.json({ filePath: req.files[0].filename, originalname: req.files[0].originalname });
});


const vstorage = multer.diskStorage({
    destination: function (req, file, cc) {
        cc(null, 'public/demovideos')
    },
    filename: function (req, file, cc) {
       
        var date = Date.now();
        cc(null, date + file.originalname);
    }
});
const vupload = multer({
    storage: vstorage
});



router.post('/uploadVideo', vupload.any(), function (req, res, next) {
  
 
    return res.json({ filePath: req.files[0].filename, originalname: req.files[0].originalname });
});

router.get('/authenticate',(req,res,next)=>{

    const email=req.body.email;
    const password=req.body.password;

    Trainer1.getUserByUsername(email,(err,reguser)=>{
        if(err) throw err;
        if(!reguser)
        {
            return res.json({success:false,msg:'User not found'});
        }

        Trainer1.comparePassword(password,reguser.password,(err,isMatch)=>
        {
            if(err) throw err;
            if(isMatch)
            {
                const token=jwt.sign(reguser.toJSON(),config.secret,{
                    expiresIn:604800
            });

            res.json({
                success:true,
                token:'Jwt'+token,
                reguser:{
                    id:reguser._id,
                    fname:reguser.fname,
                    email:reguser.email
                }
            });

            }
            else{
                return res.json({success:false,msg:'Wrong Password'});
            }

         })
    })

});

router.get('/trainerProfile',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
    console.log(req.reguser);
    res.json({reguser:req.reguser});
});


router.get('/validate', (req, res, next) => {
    res.send('Validate');
});

module.exports = router; 