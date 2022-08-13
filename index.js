const express=require('express')
const app=express()
const cookieParser=require('cookie-parser')

app.set('view engine','ejs')
app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(cookieParser())




//routes
const homeR=require('./routes/home')

app.use('/',homeR)



//404 requests
app.get('*',(req,res)=>{
    res.send('page not found')
})
app.post('*',(req,res)=>{
    res.send('page not found')
})
app.put('*',(req,res)=>{
    res.send('page not found')
})
app.patch('*',(req,res)=>{
    res.send('page not found')
})
app.delete('*',(req,res)=>{
    res.send('page not found')
})


//listen
app.listen(4000,()=>{
    console.log("Server Started at port : ",4000)
})
