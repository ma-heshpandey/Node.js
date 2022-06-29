import express  from 'express'
import { AppDataSource } from "./data-source"
import { bookRouter } from './router/bookRouter'
import { citizenshipRout } from './router/citizenshipRouter'
import { tableroute } from './router/tableRouter'


const bodyParser = require("body-parser")

const Port = 8080

const app = express()

app.use(bodyParser.json())

app.use('/book', bookRouter)
app.use('/citizenship', citizenshipRout)
app.use('/table',tableroute)

app.listen(Port,()=>{
    console.log("Express is connected.")

    AppDataSource.initialize().then(async () => {
    //await AppDataSource.manager.save(user)
    console.log("Database connected")

}).catch(error => console.log(error))

})



