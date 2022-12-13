const mongoose = require("mongoose")
//uri="mongodb://127.0.0.1/studydb"
//uri = "mongodb://169.254.34.102"
//uri = "mongodb://192.168.0.114:27017/patito"
//uri = "mongodb://192.168.0.102/patito"
uri = "mongodb+srv://itsLuis:itsAdmin@cluster0.44ul8pm.mongodb.net/test"
//uri = "mongodb+srv://itsLuis:itsAdmin@cluster0.44ul8pm.mongodb.net/test"
//uri="mongodb://127.0.0.1/study"
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a la base de datos de mongodb'))
  .catch(e => console.log('error de conexión', e))

let se = true 