import {Router, Request, Response} from "express"

import { findAll, PostBook, findById } from "../services/bookService"
import { BookContract } from "../contracts/book"
import { prependOnceListener } from "process"

export const bookRouter: Router = Router()

bookRouter.get("/", async (req: Request, res:Response)=>{

    try {
        const result = await findAll()
        res.send(result).status(200)
    }
    catch(error){
        const result = "Sorry, Not found"+error
        res.send(result).status(404)

    }

})


bookRouter.get("/:id", async (req: Request, res:Response)=>{

    try {
        const id = req.params.id
        const result = await findById(id)
        if(result){
            res.send(result).status(200)
        }
        res.status(404).send("Sorry,Data not found ")

    }
    catch(error){
        const result = "Sorry, Not found"+error
        res.send(result).status(404)

    }

})

bookRouter.post("/", async (req: Request, res:Response)=>{
    try{
        const data: BookContract = req.body
        const postedData = await PostBook(data)
        res.send(postedData ).status(200)

    }
    catch(error){
        const result = "Sorry, Not found"+error
        res.send(result).status(404)

    }
})



