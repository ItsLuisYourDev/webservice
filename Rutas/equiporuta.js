const { Router } = require('express')
const router = Router()
const miequipo = require('../Controllers/equipoctrl')

router.get('/',miequipo.consultar_todo);
router.post('/',miequipo.guardar_nuevo);
router.put('/',miequipo.actualiza_datos);
router.delete('/id',miequipo.elimina1);

module.exports = router;
