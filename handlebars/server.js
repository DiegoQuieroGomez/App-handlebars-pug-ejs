const { urlencoded } = require('express')
const express = require('express')
const { engine } = require('express-handlebars')

const app = express()
const PORT = 8080

let productos = []

app.engine('handlebars', engine({
    defaultLayout: false
}))

app.use(urlencoded({extended: true}))

app.set('views', './views')
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('formAct')  
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
  

