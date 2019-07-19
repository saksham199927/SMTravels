var express = require('express');
var router = express.Router();

//creation of api
require('../models/batch');
// var express = require('express');
// var router = express.Router();
var mongoose = require('mongoose');
var user = mongoose.model('user');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* register api. */
router.post('/register', function(req, res, next) {
  res.json({login: true});//get method can print the result on the browser but post method cannot.
});


////////////////////here we are displaying data
router.get('/disp',function(req,res){
  user.find(function(err,data){
      if(err){
          console.log(err)
      }
      else{
          res.json(data)
      }
  })
})


router.post('/add',function(req,res){
  
  new user({name : req.body.name,
    email : req.body.email,
    password : req.body.password,
    address : req.body.address,
    city : req.body.city}
)
.save(function(err,user){
  console.log(user)
  res.json(user);
});
});

//////////////////////////////////////////////////////updating data///////////////////////////////////
router.post('/update/:id',(req,res,next)=>{
  const id = req.params.id;
  let UserUpdate = {
      _id :id,
      name : req.body.name,
      email : req.body.email,
      password : req.body.password,
      city : req.body.city,
      address : req.body.address
  };
  user.findOneAndUpdate({_id:id}, UserUpdate,(err,data)=>{
      if(err){
          console.log(err)
      }
      else{
          // console.log(data)
          res.json(data)
      }
      
  })
})

/////////////////edit 
router.get('/edit/:id',(req,res)=>{
  let id = req.params.id;
  user.findById(id, function (err,data){
      res.json(data);
})
})

//////////////////////////////////////////////////delete data///////////////////////////////////////////////
router.get('/delete/:id',(req,res)=>{
  let id=req.params.id
  user.findOneAndRemove(id,(err,data)=>{
      if(err){
          console.log(err)
      }
      else{
          res.json(data)
          console.log(data)
      }
  })
})

module.exports = router;
