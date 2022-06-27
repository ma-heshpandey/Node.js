import { BookContract } from "../contracts/book"
import { AppDataSource } from "../data-source"
import {Book} from "../entity/Book"

export const findAll = async()=>{
    const result = await AppDataSource.manager.find(Book)
    return result
}


// export const findById = async(id)=>{

// }


export const PostBook = async(data)=>{

    const book = new Book()
    book.name = data.name
    book.date = data.date
    const result = await AppDataSource.manager.save(book)
    return result
}