import { BookContract } from "../contracts/book"
import { AppDataSource } from "../data-source"
import {Book} from "../entity/Book"
import {User} from "../entity/User"
import { citizenshipRout } from "../router/citizenshipRouter"


const bookRepository =AppDataSource.getRepository(Book)
const userRepository =AppDataSource.getRepository(User)


export const findAll = async()=>{
    // const result = await AppDataSource.manager.find(Book)
    const result = await bookRepository.find()
    return result
}


export const findById = async(id)=>{

    const book = await bookRepository.findOneBy({id : id})
    if(book){
        return book
    }
    else{
        return null
    }
}


export const postBook = async(data)=>{
    const book = bookRepository.create(data)
    const result = await bookRepository.save(book)
    return result
}

export const putBook = async(id, data)=>{
    const obtainBook = await AppDataSource.manager.findOneBy(Book, {id : id})
    if(obtainBook){
        //const book = await  AppDataSource.manager.update(Book, id, data)
        const book = await  bookRepository.update(id, data)
        const updatedBook= await bookRepository.findBy({id : id})
        return updatedBook
    }
    else {
        return null
    }
    
}


export const deleteBook = async(id)=>{
    const obtainBook = await bookRepository.findOneBy({id : id})
    if(obtainBook){
        //const book = await  AppDataSource.manager.delete(Book, id)
        const book = await  bookRepository.remove(obtainBook)
        return obtainBook
    }
    else {
        return null
    }
    
}