const sqlQ = require('./databaseSQL')
const { query } = require('express')
const mysql2 = require('mysql2')
const fs = require('fs')

const db = mysql2.createConnection({
    host: 'db-mysql-nyc3-60739-do-user-8173291-0.b.db.ondigitalocean.com',
    port: '25060',
    user: 'doadmin',
    password: 'NmlNmEsiRz95ps3t',
    database: 'defaultdb',
    ssl : {
        ca: fs.readFileSync('./resources/ca-certificate.crt'),
        rejectUnauthorized: false
    }
})

async function getPokemon(){
    try{
        await db.connect()
        const result = await db.promise().query(sqlQ.selectPokemon)
        await db.end()
        return result
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {
    getPokemon,
}