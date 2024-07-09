const express = require('express');
const router = require('./routes/user_routes');
const mongoose = require('mongoose');


const app = express();

app.use(express.json());

app.use('/app',router)


mongoose.connect('mongodb+srv://gladyschepkoech408:cheche@cluster0.q4ajceb.mongodb.net/register?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log('connected to database')).catch((err)=>console.log(err)) 


app.listen(5000, ()=>{
    console.log('listening on port:5000')
})