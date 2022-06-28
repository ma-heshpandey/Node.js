import { BookContract } from "../contracts/book"
import { AppDataSource } from "../data-source"
import {Book} from "../entity/Book"
import {User} from "../entity/User"
import { Citizenship } from "../entity/Citizenship"


const bookRepository =AppDataSource.getRepository(Book)
const userRepository =AppDataSource.getRepository(User)
const citizenshipRepository =AppDataSource.getRepository(Citizenship)



export const findAll = async()=>{
 
    const result = await citizenshipRepository.find()
    return result
}


export const findById = async(id)=>{

    const book = await citizenshipRepository.findBy({id : id})
    if(book){
        return book
    }
    else{
        return null
    }
}


export const postCitizenship = async(data)=>{
    const citizen = citizenshipRepository.create(data)
    const result = await citizenshipRepository.save(citizen)
    return result
}


export const putCitizenship = async(id, data)=>{
    const obtainBook = await citizenshipRepository.findOneBy({id : id})

    if(obtainBook){
        const citizen = citizenshipRepository.create({...data,"id":id})
        const updateCitzen = citizenshipRepository.save(citizen)
        
        return updateCitzen
    }
    else {
        return null
    }
    
}


export const deleteCitizenship = async(id)=>{
    const obtainBook = await citizenshipRepository.findOneBy({id : id})
    if(obtainBook){
        const book = await  citizenshipRepository.remove(obtainBook)

        return obtainBook
    }
    else {
        return null
    }
    
}