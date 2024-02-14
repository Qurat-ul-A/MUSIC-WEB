const express=require('express')
const app=express();
const port=process.env.PORT || 8000;
const hbs=require('hbs');
const path=require('path')
require("./DB/connection")
const schema=require("./Schema/schema")

//path
const public=path.join(__dirname,"./public")
// console.log(public)
const Dynamic=path.join(__dirname,"./Dynamic")


app.use(express.static(public))
//use hbs as a view engine
app.set("view engine","hbs")
app.set("views",Dynamic)

//middleware used instead of bodyparser
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.render("index")
})

app.post("/comments",async(req,res)=>{
    try {
       const info=new schema({
        name:req.body.name,
        email:req.body.email,
        comment:req.body.comment,
       }) 
       const comment=await info.save();
       res.status(201).render("index")
    } catch (error) {
        res.status(400).send(error)
    }
})

app.listen(port,()=>{
    console.log(`server is running on the port ${port}`)
})