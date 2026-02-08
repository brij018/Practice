import express, { urlencoded } from "express"
 
const app = express()
const port = 5000
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/heart",(req,res)=>{
    res.render("heart")
})
app.get("/fuckoff",(req,res)=>{
    res.render("fuckoff")
})
app.get("/about",(req,res)=>{
    res.send("there is nothing to tell you bitches about")
})

app.listen(port, ()=>{
    console.log("server is running on port", port)
})
