import { BookContract } from "../contracts/book"
import { AppDataSource } from "../data-source"
import {Book} from "../entity/Book"
import {User} from "../entity/User"
import { Table } from "../entity/Table"
import { type } from "os"


const bookRepository =AppDataSource.getRepository(Book)
const userRepository =AppDataSource.getRepository(User)
const TableRepository =AppDataSource.getRepository(Table)



export const findAll = async()=>{
 
    const result = await TableRepository.find()
    return result
}


export const findById = async(id)=>{

    const table = await TableRepository.findOneBy({id : id})
    console.log(typeof(table))
    if(table){
        
        return table
    }
    else{
        return null
    }
}


export const postTable = async(data)=>{
    const obtainUser = await userRepository.findOneBy({id : data.user})
    if (obtainUser){
        const result = await TableRepository.save({...data,"user":[obtainUser]})
        return result
    }
    else{
        return null
    }
    
}


export const putTable = async(id, data)=>{
    const obtainBook = await TableRepository.findOneBy({id : id})
    if(obtainBook){
        const citizen = TableRepository.create({...data,"id":id})
        const updateCitzen = TableRepository.save(citizen)
        
        return updateCitzen
    }
    else {
        return null
    }
    
}


export const deleteTable = async(id)=>{
    const obtainBook = await TableRepository.findOneBy({id : id})
    if(obtainBook){
        const book = await  TableRepository.remove(obtainBook)

        return obtainBook
    }
    else {
        return null
    }
}