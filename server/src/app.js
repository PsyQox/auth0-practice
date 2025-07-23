import express from 'express'

const server = express()

server.listen(3001, () => {
    console.log(`server listen on: `, 3001);
})

server.get('/', (req, res)=>{
    res.send("Hola")
})