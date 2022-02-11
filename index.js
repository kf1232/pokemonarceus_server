/*This is all just gros test code, it'll be removed*/
const express = require('express')
const http = require('http')
const port = 3000
const app = express()
const mysql2 = require('mysql2')
const fs = require('fs')

app.get('/',(req,res) => {
  res.send('Hello World!')
})

app.listen(port, () =>{
  console.log('app sitting on port ${port}')
})
    



//connect to db
const db = mysql2.createConnection({
  host: 'db-mysql-nyc3-60739-do-user-8173291-0.b.db.ondigitalocean.com',
  port: '25060',
  user: 'doadmin',
  password: 'NmlNmEsiRz95ps3t',
  database: 'defaultdb',
  ssl : {
      ca: fs.readFileSync(__dirname + '/resources/ca-certificate.crt'),
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




const queryString = 'select * from pokemon'


app.get('/pokemon', (req, res) => {
  const result = res;
  db.query(queryString, (err, res, fields) => {
    result = res;
  })
  res.send(JSON.stringify(result))
})

db.query(queryString, (err, res, fields) => {
  if (err) {
      console.log('Error: ' +  err);
      return;
  }
  console.log('yup, thats a table');
});

db.query('select * from pokemon order by id', (err,res,fields) => {
  if(err) throw error;

  console.log( JSON.stringify(res));
});


db.end();
