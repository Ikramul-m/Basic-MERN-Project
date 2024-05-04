const express = require('express')

const app = express()

const PORT = 4000
const hostName = 'localhost'

app.get('/' , (req,res) => {
    res.send('Api is Working...')
})

app.listen(PORT, () => {
    console.log(`listening to the http://${hostName}:${PORT}`)
})