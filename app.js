const express = require('express')
const app = express()
const port = 3000

const env = require('./resources/env.js')




app.get('/',(req,res) => {
    res.send('Hello World!')
})
app.use('/pokemon',require('./routes/routes'))

app.listen(port, () =>{
    console.log('app sitting on port ${port}')
})

