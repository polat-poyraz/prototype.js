const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
app.use('/styles', express.static(path.join(__dirname, 'styles')))
app.use('/assets', express.static(path.join(__dirname, 'assets')))

fs.readdir('./public', (err, files) => {
    for (let i in files) {
        app.get(`/${files[i].replace('.html', '')}`, (req, res) => {
            res.sendFile(path.join(__dirname, `/public/${files[i].replace('.html', '')}.html`))
        })
    }
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/main.html'))
})

app.listen(8000)