const express = require('express')
const route = require('./routes')

const app = express();

app.use(express.json())

app.use(route)

app.listen(3000, function(){
    console.log("servidor executando na porta:3000")
})