const express = require("express")
const morgan = require("morgan")
const app = express()
app.use(morgan("dev"))
app.set("port",3015)
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(express.static("./public"))
app.use("/api/equipo",require("./Rutas/equiporuta"))
app.use("/api/estudibd",require("./Rutas/estudidb"))
app.use("/pagina",express.static("./pagina.html"))
app.get("/pagi",(req,res)=>(res.render("pagi.ejs")))
app.get("/pag",(req,res)=>{
    res.send("<h1>hola<h1>")
    //res.render("../view/index.ejs",{hola:"hola mundo desde baqune"})
})
app.get("/",(req,res)=>(res.render("index.ejs")))
//app.get("/pag",(req,res)=>res.render("../view/index.ejs",{hola:"hola mundo desde baqune"}) )
module.exports = app;
