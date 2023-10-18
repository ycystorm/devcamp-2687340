const express = require('express')
const router = express.Router()

// crud de usuarios 

//crear usuario
router.post('/', (request, response)=>
response
  .status(200)
  .json({
    "success": true,
    "msg":"aqui se insertaran usuarios"
  })
)

//eliminar usuario 
router.delete('/:id', (request, response)=>
response
  .status(200)
  .json({
    "success": true,
    "msg":`aqui se eliminaran usuarios con id ${request.params.id}`
  })
)

//consultar usuario 
router.get('/', (request, response)=>
response
  .status(200)
  .json({
    "success": true,
    "msg":"aqui se consultaran todos los usuarios  "
  })
)

//consutar usuario por id 
router.get('/:id', (request, response)=>
response
  .status(200)
  .json({
    "success": true,
    "msg":`aqui se consultaran todos los usuarios con id  ${request.params.id}  `
  })
)

//actualizar usuarios
router.put('/:id', (request, response)=>
response
  .status(200)
  .json({
    "success": true,
    "msg":`aqui se actualizaran usuarios con id  ${request.params.id}`
  })
)

//exportar routers
module.exports=router