const cookieToken=async(user,res)=>{
    const token = {user:user.username}
    console.log(token)

    let goto=user.username=='a'?'/a':'/b'
    const options = {
        expires: new Date(Date.now()+8*24*60*60*1000),
        httpOnly:true
    }
    return res.cookie('token', token ).redirect(`${goto}`)
}

module.exports = cookieToken