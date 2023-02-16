let pokemones = require("../pokemones")

exports.Listado = (req,res) => {
    res.json(pokemones)
}