const express=require('express');
const app=express();
const mongoose=require('mongoose');

const router=express.Router();

const AdminRoutes = require('./Routes/AdminRoutes');

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));

app.use('/',AdminRoutes);



//Connect To Database
mongoose.set('strictQuery', false);

const dbURI = 'mongodb://akshayakumarir:akshayakumarir@ac-gomarov-shard-00-00.j0bx81s.mongodb.net:27017,ac-gomarov-shard-00-01.j0bx81s.mongodb.net:27017,ac-gomarov-shard-00-02.j0bx81s.mongodb.net:27017/flights?ssl=true&replicaSet=atlas-l871m0-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(dbURI,{useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log("Connected To Mongo"))
.catch((err)=>console.log(err));

//Login Signup

app.get('/signup', (req, res) => {
  res.render('../views/Signup.ejs')
})
app.get('/', (req, res) => {
  res.render('../views/Login.ejs')
})

//Authentication

const user=[];
app.get('/users',(req,res)=>{
res.render('../views/Users/Home.ejs');
})

// app.post('/user',(req,res)=>{
//   const user={name:req.body.name,password:req.body.password}
//   user.push(user);
//   res.status(201).send();
// })

app.get('/admin',(req,res)=>{
  res.render('../views/Admin/AdminF.ejs');
})

//Basic UI

app.set('view engine','ejs')

app.listen(3000,()=>{
  console.log("listerning");
})