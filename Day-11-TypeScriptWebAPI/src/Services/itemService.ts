import { mockItems } from "../Mock/itemsMock";  
import {Items} from "../Contracts/Items"    

// export const findAll = () =>{
//     //return mockItems
//     return Promise.resolve(mockItems);
// }

export const findAll = async () =>{
    //return mockItems
    const somePromise= new Promise((resolve, reject)=>{
        resolve(mockItems)
    })
    //console.log(somePromise)
    return somePromise

    // const value = await somePromise.then((valueObtained)=>{

    //     return valueObtained
    // })

    //  return value
    //return Promise.resolve(mockItems);
}

export const postData = async (item : Items)=>{
    await mockItems.push(item)
    return mockItems
}

export const deletePost = async(id:number)=>{

    const newArray:Array<Items>  =await  mockItems.filter((element)=>element.id != id)
    
    return newArray
}

//recommended way

export const updatePost = async (id: number, upatedObject: Items)=>{
    
    const item: Array<Items> = await mockItems.filter((element)=>element.id == id)
  
    if(item[0]){
        const indexObtained: number = mockItems.indexOf(item[0])
        
        mockItems[indexObtained]= upatedObject
        return upatedObject
    }
    return Promise.reject("Not Found")   // catch block catches the error Not found
}


//updatePost using Promise, not very recommended way



// export const updatePost = async (id: number, upatedObject: Items)=>{
//     console.log(id, upatedObject)
//     const itemPromise = new Promise((resolve, reject)=>{
//         const item: Array<Items> =  mockItems.filter((element)=>element.id == id)
        
//         if(item[0]){
//             const indexObtained: number = mockItems.indexOf(item[0])
            
//             mockItems[indexObtained]= upatedObject
//             // return upatedObject
//             resolve(upatedObject)

//         }
//         reject("Not Found")
        
//     })

//     const value = await itemPromise.then((arrayObtained)=>{
//         console.log("promise Resolved", arrayObtained)
//         return arrayObtained
//     }).catch((message)=>{
//         return message
//     })
   
//     return value

// }
