const express=require('express')
const { login, logout, dashbb } = require('../controllers/user')
const { isLoggedin, ifLoggedin, isLoggedinA, isLoggedinB } = require('../middlewares/user')
// const { isAdmin, isLoggedinB, isLoggedinA} = require('../middlewares/user')
const router=express.Router()

//dashboard
router
    .route('/')
    .get(isLoggedin,dashbb)

router
    .route('/login')
    .get(ifLoggedin,(req,res)=>{
        res.render('login')
    })
    .post(login)


//login and logout
router
    .route('/logout')
    .get(logout)

router
    .route('/a')
    .get(isLoggedin,isLoggedinA,(req,res)=>{
        res.send("A page")
    })

router
    .route('/b')
    .get(isLoggedin,isLoggedinB,(req,res)=>{
        res.send("B page")
    })
  module.exports=router