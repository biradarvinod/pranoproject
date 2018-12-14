const JwtStrategy=require('passport-jwt').Strategy;
const ExtractJwt=require('passport-jwt').ExtractJwt;
const Trainer=require('../models/traineruser');
const config=require('../config//database');

module.exports=function(passport){
    let opts={};
    opts.jwtFromRequest=ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey=config.secret;
    passport.use(new JwtStrategy(opts, (jwt_payload,done) =>
    {
      Trainer.getUserById(jwt_payload._id,(err,reguser) =>
      {
          console.log(err + "122424" + reguser );
          if(err)
          {
              return done(err,false);
          }
          if(reguser)
          {
              return done(null,reguser);
          }
          else
          {
              return done(null,false);
          }
      });
    }));
}