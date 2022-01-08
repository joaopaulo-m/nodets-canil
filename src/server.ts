import express from 'express'
import donenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'

import mainRoutes from './routes/index'

donenv.config()

const server = express()

server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

server.use(express.static(path.join(__dirname, '../public')))
server.use(mainRoutes)
server.use((req, res)=>{
    res.send('Página não encontrada')
})

// rotas

server.listen(process.env.PORT)