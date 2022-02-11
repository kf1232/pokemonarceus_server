const { respone } = require('express')
const express = require('express')
const http = require('http')
const fs = require('fs')


var pkmnAPI = express.Router()

var pkmnQuery = require('../database/databaseLogic')

pkmnAPI.get('/', (req, res) => {
    pkmnQuery.getPokemon().then(result=>{
        res.send(JSON.stringify(result))
    })
})




module.exports = pkmnAPI