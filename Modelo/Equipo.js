const {Schema,model} = require("mongoose")

const schemaequipo = new Schema(
{
    nombre:{type:String,require:true},
    dt: {type:String,require:true},
    federacion:{type:String,require:true},
    ranking: {type:Number,require:true},
}, 
{
    timestamps: true
});

module.exports = model("equipo",schemaequipo);
