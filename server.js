import 'dotenv/config' 
import express from 'express'

const app = express()


import routerProduct from './src/app/product/routes/index.js'
import routerCart from './src/app/cart/routes/index.js'



// Configuracion de los arhivos vista
app.set('views', './src/views')


app.set('views engine', 'ejs')

app.use(express.static('./public'))

// Seteo de la data en json
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/', (req,res) => {
    res.render('index.ejs')
}) 

app.use('/', routerProduct)
app.use('/', routerCart)


const port = process.env.PORT || 3000
const myServer=app.listen(port)

// const io=new Server(myServer)

// instanceSockets(io)