import express  from 'express'
import { AppDataSource } from "./data-source"
import { bookRouter } from './router/bookRouter'

const bodyParser = require("body-parser")

const Port = 8000

const app = express()

app.use(bodyParser.json())

app.use('/book', bookRouter)

app.listen(Port,()=>{
    console.log("Express is connected.")

    AppDataSource.initialize().then(async () => {
    //await AppDataSource.manager.save(user)
    console.log("Database connected")

}).catch(error => console.log(error))

})



