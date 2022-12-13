const app = require("./app")
const study = require("./Modelo/mEstudiobd")

//app.use("/con",require("../public"))
//todo Metodo get para optener los datos
app.get("/con", async (req, res) => {
    resultao_study = await study.find()
    //res.send(resultado_study[0].nombre)
    // console.log(resultao_study)
    //res.send(resultado_study[0].nombre)
    res.render("../view/crudMongo.ejs", {
        hola: resultao_study,
        nomPagina: "NodeMOngo",
        titulo: "Datos"
    })
})

//todo Metodo post para enviar datos
app.post("/con", async (req, res) => {
    const nuevoEstudiante = new study(
        {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            materia: req.body.materia
        }
    )
    await nuevoEstudiante.save();
    console.log(nuevoEstudiante)
    //res.redirect('/con')
    res.redirect('back')
})

//todo Metodo post para enviar datos y eliminar
app.post("/conelimina", async (req, res) => {
    const miide = req.body.id
    //console.log(req.path)
    await study.findByIdAndDelete(miide)
    console.log(req.body.id)
    res.redirect('back')
    // res.redirect('/con')
})

//todo Metodo post para enviar datos y actualizar
app.post("/actu", async (req, res) => {
    const miide = req.body.id
    //console.log(req.path)
    //await study.findByIdAndDelete(miide)
    await study.findByIdAndUpdate(miide, req.body);
    console.log(req.body)
    res.redirect('back')
    // res.redirect('/con')
})




/* app.post("/formulario",(req,res)=>{
    console.log(req.body.name)
}) */

/* miStudy.guardar_estudiante = async (req, res) => {
    const nuevoEstudiante = new study(
        {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            materia: req.body.materia
        }
    )
    await nuevoEstudiante.save();
    res.json({ status: "estudiante creado" })
} */

module.exports = app;

