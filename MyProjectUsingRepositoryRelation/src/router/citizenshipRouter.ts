//One to One Mapping

import {Router, Request, Response} from "express"
import { findAll, postCitizenship, findById, putCitizenship, deleteCitizenship } from "../services/citzenshipService"


export const citizenshipRout: Router = Router()

citizenshipRout.get("/", async (req: Request, res:Response)=>{

    try {
        const result = await findAll()
        res.send(result).status(200)
    }
    catch(error){
        const result = "Sorry, Not found"+error
        res.send(result).status(404)

    }

})

 citizenshipRout.get("/:id", async (req: Request, res:Response)=>{

    try {
        const id = req.params.id
        const result = await findById(id)
        if(result){
            res.send(result).status(200)
        }
        else{ 
        res.status(404).send("Sorry,Data not found ")
    }
    }
    catch(error){
        const result = "Sorry, Not found"+error
        res.send(result).status(404)

    }

})


citizenshipRout.post("/", async (req: Request, res:Response)=>{
    try{
        const data = req.body
        const postedData = await postCitizenship(data)
        res.send(postedData ).status(200)

    }
    catch(error){
        const result = "Sorry, Not found"+error
        res.send(result).status(404)

    }
})


 citizenshipRout.put("/:id", async (req: Request, res:Response)=>{
    try{
        const id = Number(req.params.id)
        //const date = req.body.date
        //const book = req.body
        // book.date = Date(date) body-parser is it?
        const postedData = await putCitizenship(id, req.body)
        if(postedData){
            res.send(postedData).status(200)
        }
        else{
            res.status(404).send("Sorry, Data Not Found")
        }
    }
    catch(error){
        const result = "Sorry, Not updated "+error
        res.status(502).send(result)

    }
})



 citizenshipRout.delete("/:id", async (req: Request, res:Response)=>{
    try{
        const id = Number(req.params.id)
        // book.date = Date(date) body-parser is it?
        const postedData = await deleteCitizenship(id)
        if(postedData){
            res.json({"message":"Data Deleted", "data": postedData}).status(200)
        }
        else{
            res.status(404).send("Sorry, Data Not Found")
        }
    }
    catch(error){
        const result = "Sorry, Not updated "+error
        res.status(502).send(result)

    }
})




