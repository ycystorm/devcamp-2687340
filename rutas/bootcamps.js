const express = require('express')
const router = express.Router()



// endpoints de rutas del bootcamps

  //obtener todos los butcamps
  router.get('/', (request, response)=>
  response
    .status(200)
    .json({
      "success": true,
      "msg":"aqui van a mostrarse todos los bootcamps"
    })
)

  //obtener  bootcamp por id
  router.get('/:id', (request, response)=>
  response
    .status(200)
    .json({
      "success": true,
      "msg":`obteniendo bootcamp con id ${request.params.id}`
    })
)

 //crear bootcamp
 router.post('/', (request, response)=>
 response
   .status(200)
   .json({
     "success": true,
     "msg":"aqui se van a crear bootcamps"
   })
)

  //actualizar bootcamp por id 
  router.put('/:id', (request, response)=>
  response
    .status(200)
    .json({
      "success": true,
      "msg":`aqui se van a actualizar bootcamps con  id ${request.params.id}`
    })
)

  //actualizar bootcamp 
  router.put('/', (request, response)=>
  response
    .status(200)
    .json({
      "success": true,
      "msg":"aqui se van a actualizar bootcamps "
    })
)



  //eliminar bootcamp con id
  router.delete('/:id', (request, response)=>
  response
    .status(200)
    .json({
      "success": true,
      "msg":`aqui se van a eliminar bootcamps con  id ${request.params.id}`
    })
)



//exportar routers
module.exports=router