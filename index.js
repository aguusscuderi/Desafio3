const Contenedor = require("./contenedor")
const express = require('express')
const app = express()
const PORT = 8080

const prod1 =   {
    id: Number,
    name: 'PROCESADOR INTEL i5',
    description: 'PROCESADOR INTEL i5 6 NUCLEOS 12 HILOS'
}

const prod2 =    {
    id: Number,
    name: 'PROCESADOR RYZEN 5 5600x',
    description: 'PROCESADOR RYZEN 5 5600x 6 NUCLEOS 12 HILOS'
}

const prod3 =  {
    id: Number,
    name: 'PROCESADOR AMD RYZEN 7 3600x',
    description: 'PROCESADOR RYZEN 7 3600x 6 NUCLEOS 12 HILOS'
}


app.listen(PORT, () => {
    console.log(`Estas conectado a http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
    let welcome = `
    <h1> Bienvenido al DESAFIO 3! </h1>
    <p> /productos: Devuelve los productos en nuestra base <a href="http://localhost:${PORT}/productos">Click aca </a> </p>
    <p> /productoRandom: Devuelve un random product de nuestra base <a href="http://localhost:${PORT}/productoRandom">Click aca </a></p>
    `
    res.send(welcome)
})


app.get('/productos', async (req, res) => {
    const dataAll = await firstFile.getAll()
    res.send(dataAll)
})

    
app.get('/productoRandom', async (req, res) => {
    const randomProduct = await firstFile.getRandom()
    res.send(randomProduct)
})



app.on('error', err => {console.log('Fallo la conexion al servidor!', err)})



    // Instancia y ejecucioness.
const firstFile = new Contenedor('productos.txt')
setTimeout(() => {firstFile.save(prod1)},1000)
setTimeout(() => {firstFile.save(prod2)},1100)
setTimeout(() => {firstFile.save(prod3)},1200)








