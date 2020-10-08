const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()

app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.use('/components', express.static(path.join(__dirname, 'components')))
app.use('/lib', express.static(path.join(__dirname, 'lib')))
app.use('/styles', express.static(path.join(__dirname, 'styles')))

newRequire = (requireName, filesName) => {
    app.get(`/${requireName}`, (req, res) => {
        res.sendFile(path.join(__dirname, `/public/${filesName}`))
    })
}

fs.readdir('./public', (err, files) => {
    for (let i in files) {
        const requireName = files[i].replace('.html', '')
        const fileName = files[i]

        newRequire(requireName, fileName)
    }
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/main.html'))
}).listen(8000)