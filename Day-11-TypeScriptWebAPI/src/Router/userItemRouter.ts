import { Router, Request, Response} from 'express'

import {findAll, postData, deletePost, updatePost} from '../Services/itemService'
import { Items } from '../Contracts/Items'; 


export const itemsRouter:Router = Router();


itemsRouter.get("/",async (req: Request, res: Response)=>{
   try {
    const result = await findAll()
   // console.log("from router", result)
    res.send(result).status(200)
   }
   catch(error){
     res.status(404).json({"message":"Sorry, requested data not availabe", "error":`${error}`})
   }
   
})

itemsRouter.post("/",async (req:Request, res: Response)=>{
    const item:Items ={
        id : req.body.id,
        title : req.body.title,
        body : req.body.body
    }

    try {
        const obtainPostData = await postData(item)
        res.status(200).json(obtainPostData)
    }
    catch(error){
     res.status(404).json({"message":"Sorry, requested data not availabe", "error":`${error}`})
    }

    //res.json(obtainPostData)
})

itemsRouter.delete('/:id',async (req: Request, res: Response)=>{
    const id: number =  Number(req.params.id)
    
    try {
    const newArray: Array<Items> = await deletePost(id)
    res.status(200).json(newArray)    
    }
    catch(error){
        res.status(404).json({"message":"Sorry, requested data not availabe", "error":`${error}`})
       }
})

itemsRouter.put('/:id', async (req:Request, res: Response)=>{
    const id: number =  Number(req.params.id)
    const updatedObject:Items = req.body
    try{
        const updatedArray = await updatePost(id, updatedObject)
        console.log("inside the..",updatedArray)
        res.status(200).json(updatedArray)
    }
    catch(error){
        res.status(404).json({"message":"Sorry, requested data not availabe", "error":`${error}`})
    }

})



