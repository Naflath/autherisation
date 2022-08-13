
exports.isLoggedin = async (req,res,next)=>{
    const token = req.cookies.token

    if(!token){
        return res.redirect('/login')
    }
    req.username=token.user
    next()
}

exports.isLoggedinA = async (req,res,next)=>{
    console.log('user',req.username)
    if(!(req.username=='a')){
        return res.redirect('/login')
    }
    next()
}

exports.isLoggedinB = async (req,res,next)=>{
    console.log('user',req.username)

    if(!(req.username=='b')){
        return res.redirect('/login')
    }
    next()
}

exports.ifLoggedin = async (req,res,next)=>{
    const token = req.cookies.token

    if(token){
        return res.redirect('/')
    }
    next()
}