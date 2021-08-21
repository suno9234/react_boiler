const express = require('express');
const { mongo } = require('mongoose');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ssh9234:tnsghsmscjswo1@cluster0.zdzgv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {useNewUrlParser : true}).then(()=>console.log("db connected"))
                            .catch(err=>console.log(err));

app.get('/',(req,res)=>{
    res.send('Hellow word');
})

app.listen(4000,(req,res)=>{
    console.log("Server Start");
});