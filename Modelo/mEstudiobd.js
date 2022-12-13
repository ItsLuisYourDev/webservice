const { Schema, model } = require("mongoose");

const schemaStudy = new Schema(
{
    nombre: { type: String, require: true },
    apellido: { type: String, require: true },
    materia: { type: String, require: true },
},
{
    timestamps: true
});

module.exports = model("study",schemaStudy)
