const _PORT   = 8081

const server  = require('./api/api')

const express = require('express')
const cors    = require('cors')
const log     = require('morgan')

const app     = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(log('dev'))

app.use('/', server)

app.use(cors({origin:'https://cloudweek.netlify.app/', credentials: true }))

// app.use(cors('*'))

// app.use(cors())

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*")
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested, Content-Type, Accept Authorization"
//     )
//     if (req.method === "OPTIONS") {
//       res.header(
//         "Access-Control-Allow-Methods",
//         "POST, PUT, PATCH, GET, DELETE"
//       )
//       return res.status(200).json({})
//     }
//     next()
// })

app.listen(process.env.PORT || _PORT,()=>{
    console.log(`Online into Port: ${_PORT}`)
})