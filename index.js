const express = require('express')
const app = express()
const mysql2 = require('mysql2')
const fs = require('fs')


//connect to db
const db = mysql2.createConnection({
  host: 'db-mysql-nyc3-60739-do-user-8173291-0.b.db.ondigitalocean.com',
  port: '25060',
  user: 'doadmin',
  password: 'NmlNmEsiRz95ps3t',
  database: 'defaultdb',
  ssl : {
      ca: fs.readFileSync(__dirname + '/ca-certificate.crt'),
      rejectUnauthorized: false
  }
})

db.connect(err => {
  if(err) {
      console.log('Connection error message ' + err.message);
      return;
  }
  console.log('MySQL connected')
})


const queryString = 'select * from pokemon';

db.query(queryString, (err, res, fields) => {
  if (err) {
      console.log('Error: ' +  err);
      return;
  }
  console.log('yup, thats a table');
});

db.query('select * from pokemon order by id limit 5 offset 5', (err,res,fields) => {
  if(err) throw error;
  
  console.log( JSON.stringify(res));
});


db.end();
