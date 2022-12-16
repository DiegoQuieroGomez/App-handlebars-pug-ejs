
const { urlencoded } = require('express')
const express = require('express')

const app = express()
const PORT = 8080

let productos = []

app.use(urlencoded({extended: true}))

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('layout.pug')  
})

app.post('/productos', (req, res) =>{
    productos.push(req.body)
    console.log(productos)
    res.redirect('/')
    
})

app.get('/productos', (req, res) =>{
    res.render('productList', {productos}) 
    
})

const server = app.listen(PORT, () => { console.log(`Puerto ${server.address().port} escuchado correctamente`) })
server.on('error', error => console.log(`Error en el servidor: ${error}`))
  

