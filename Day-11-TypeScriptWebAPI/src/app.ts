import express from 'express'
import {itemsRouter} from './Router/userItemRouter'
const bodyParser = require('body-parser')
//import {body-Parser} from 'body-parser'

const PORT = 8000

const app = express()
app.use(bodyParser.json())

app.use('/items',itemsRouter)

app.listen(PORT,()=>{
    console.log('I am listining')
})