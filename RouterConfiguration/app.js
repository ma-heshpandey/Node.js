const express = require("express")
const app = express()
const blogRoute =  require("./route/blogRoute")
const collegeRoute =  require("./route/collegeRoute")
const bodyParser = require("body-parser")



const PORT = 3001

app.use(bodyParser.json())
app.use("/blog", blogRoute)
app.use("/college", collegeRoute)

app.listen(PORT,()=>{
    console.log("I am listening")
})

