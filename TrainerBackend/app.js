const express=require('express');
const path=require('path');
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const passport=require('passport');
const config=require('./config/database')

// mongoose.connect('mongodb://localhost:27017/trainersdata',{ useNewUrlParser: true });

mongoose.connect(config.database);
mongoose.connection.on('connected',()=>
{
    console.log('Connected to database'+config.database)
});

mongoose.connection.on('error',(err)=>
{
    console.log('Connection error'+err);
})

const app=express();
const users=require('./routes/users')

app.use(cors());

app.use(express.static(path.join(__dirname,'public')));

const port=3000;

app.use(bodyParser.json());


app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users',users)

app.get('/',(req,res)=>
{
  res.send('invalid');
});


app.get('*',(req,res)=>{
    res.sendfile(path.join(__dirname,'public/index.html'))
});
app.listen(port,()=>
    {
 console.log('server started at port'+port);
    })