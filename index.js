const express = require('express');
const { mongo } = require('mongoose');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const {User} = require('./models/user');

const config = require('./config/key');

mongoose.connect(config.mongoURI,
    {useNewUrlParser : true}).then(()=>console.log("db connected"))
                            .catch(err=>console.log(err));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.post('/api/users/register',(req,res)=>{
    const user = new User(req.body);
    user.save((err,userData)=>{
        if(err) return res.json({succress : false, err});
    })
    return res.status(200).json({success : true});
});

app.get('/',(req,res)=>{
    res.json({"hello~ ": "Hi"});
})

app.listen(4000,(req,res)=>{
    console.log("Server Start");
});