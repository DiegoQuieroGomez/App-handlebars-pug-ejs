const express = require('express')
const {engine} = require('express-handlebars')

const app = express()
const PORT = 8080

app.engine('handlebars', engine({
    defaultLayout: false
}))

app.set('views', './views')
app.set('view engine', 'handlebars')
/*
app.get('/', (req, res) => {
    const datos = {
        nombre: 'Diego',
        apellido: 'Quiero',
        edad: 32,
        email: 'diego.quiero.g90@gmail.com',
        telefono: '962663758'
    }

    res.render('datos', datos)
})
*/

app.post('/ingresarProductos', (req, res) =>{
    const nombre = req.body
    res.redirect('/ingresarProductos')
})

const server = app.listen(PORT, () => { console.log(`Puerto ${server.address().port} escuchado correctamente`) })
server.on('error', error => console.log(`Error en el servidor: ${error}`))
  

