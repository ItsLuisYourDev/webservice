const miequipo = {}
const equipo = require("../Modelo/Equipo")

miequipo.consultar_todo = async (req, res) => {
    resultado_equipo = await equipo.find()
    res.json(resultado_equipo)
}

miequipo.guardar_nuevo = async (req, res) => {
    const nuevoequipo = new equipo({
        nombre: req.body.nombre,
        dt: req.body.dt,
        federacion: req.body.federacion,
        ranking: req.body.ranking
    });
    await nuevoequipo.save();
    res.json({status: "Equipo creado satisfactoriamente"})
}

miequipo.actualiza_datos = async (req, res) => {
    const miide = req.body.id
    await equipo.findByIdAndUpdate(miide,req.body);
    res.json({status: "Datos actualizados satisfactoriamente"})
}

miequipo.elimina1 = async(req, res)=>{
    const miide = req.params.id
    
    await equipo.findByIdAndDelete(miide)
    res.json({status:"Registro eliminado"})
}
module.exports = miequipo;