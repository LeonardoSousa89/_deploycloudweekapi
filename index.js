const _PORT   = 8081

const server  = require('./api/api')

const express = require('express')
const cors    = require('cors')
const log     = require('morgan')

const app     = express()

app.use(cors({origin:'*'})) 
// app.use(cors({
//     origin:'https://cloudweek.netlify.app/',
//     allowedHeaders:'Content-type',
//     methods: ['GET', 'POST', 'PUT', 'DELETE']
// })) 
       
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(log('dev'))

app.use('/', server)


app.listen(process.env.PORT || _PORT,()=>{
    console.log(`Online into Port: ${_PORT}`)
})