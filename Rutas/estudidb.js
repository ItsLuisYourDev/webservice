const { Router } = require('express')
const router = Router()
const mistudy = require("../Controllers/estudibdctrl")

router.get("/",mistudy.consultar_todo)
router.post("/",mistudy.guardar_estudiante)
router.put("/",mistudy.actualiza_datos)
router.delete("/",mistudy.elimina_es)
//router.get("/",(req,res)=>res.render("../view/index.ejs",{hola:"de"}) )

module.exports = router;
