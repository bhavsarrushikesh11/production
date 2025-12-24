const express = require("express")
// another syntax import express from "express"
require('dotenv').config()
const app = express()
const port = 4000

app.get('/', (req, res) =>{
    res.send("Hello World")
})

app.get('/twitter', (req, res) =>{
    res.send("rushikeshBhavsar_2004")
})

app.get('/login', (req, res) =>{
    res.send("<h1>rushikeshBhavsar_2004</h1>")
})

// app.listen(port, ()=>{
//     console.log(`our app listening on port ${port}`)
// })

app.listen(process.env.PORT, ()=>{
    console.log(`our app listening on port ${port}`)
})
