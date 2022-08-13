
let users=require('../data')
const cookieToken = require('../utils/cookieToken')

exports.login = async (req,res,next)=>{
    const {username,password} = req.body

    let user=users.find((x)=>x.username==username)
    if(!user){
        return res.redirect('/login')
    }
    if(!user.password==password){
        return res.redirect('/login')
    }
    cookieToken(user,res)
}

exports.logout = async (req,res,next)=>{
    res.cookie('token',null,{
        expires: new Date(Date.now()),
        httpOnly:true
    })
    res.status(200).redirect('/login')
}


exports.dashbb= (req,res)=>{
        let goto=req.username=='a'?'/a':'/b'
        res.redirect(goto)
}