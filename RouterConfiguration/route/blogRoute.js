const express = require("express")
const router = express.Router()


blogPost = [{
  "id": 1,
  "name":"article1",
  "author":"Mahesh"
},
{
  "id": 2,
  "name":"article2",
  "author":"Pandey"

}]
// middleware that is specific to this router
// router.use((req, res, next) => {
//     console.log('Time: ', Date.now())
//     next()
//   })

router.get("/",(req, res)=>{
    res.send("Blog home page")
})

router.post("/",(req, res)=>{
  let newArray = {
    id: req.body.id,
    name: req.body.name
  }
  blogPost.push(newArray)
  res.status(200).send(blogPost)
})


router.delete("/:id",(req, res)=>{
   let id = req.params.id

   blogArray = blogPost.filter(element => element.id !== Number(id))
  res.send(blogArray)
})



router.put("/:id",(req, res)=>{
  let name = req.body.name
  let id = req.params.id
  blogPost.forEach(element => {
    if (element.id === Number(id)){
      element.name = name
    }
  });
  //blogArray = blogPost.filter(element => element.id !== Number(id))
 res.send(blogPost)
})

module.exports = router
console.log(module)