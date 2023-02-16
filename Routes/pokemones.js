const express = require("express");
const { default: Listado } = require("../src/Componentes/Listado");
const router = express.Router()


router.get("/pokemones", Listado)