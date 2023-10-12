  const express = require('express')

  //crear el objeto principal
  //de la api 
  const app = express();

  //url de prueba 
  app.get('/prueba', function(request , response ){
    response.send("Hola")
  })

  app.get('/prueba2', (request, response)=>
    response
      .status(200)
      .json({
        "success": true
      })
  )

  //ruta de los recursos botcamps


  //obtener todos los butcamps
  app.get('/api/v1/bootcamps', (request, response)=>
  response
    .status(200)
    .json({
      "success": true,
      "msg":"aqui van a mostrarse todos los bootcamps"
    })
)
  //obtener  los butcamps con id 
  app.get('/api/v1/devcamp/bootcamps/:id', (request, response)=>
  response
    .status(200)
    .json({
      "success": true,
      "msg":`obteniendo bootcamp con id ${request.params.id}`
    })
)

  //crear bootcamp
  app.post('/api/v1/devcamp/bootcamps', (request, response)=>
  response
    .status(200)
    .json({
      "success": true,
      "msg":"aqui se van a crear bootcamps"
    })
)

  //actualizar bootcamp
  app.put('/api/v1/devcamp/bootcamps/actualizar', (request, response)=>
  response
    .status(200)
    .json({
      "success": true,
      "msg":"aqui se van a actualizar bootcamps"
    })
)

  //eliminar bootcamp
  app.delete('/api/v1/devcamp/bootcamps/eliminar', (request, response)=>
  response
    .status(200)
    .json({
      "success": true,
      "msg":"aqui se van a eliminar bootcamps"
    })
)





// crud de usuarios 

//crear usuario
app.post('/api/v1/devcamp/usuario', (request, response)=>
response
  .status(200)
  .json({
    "success": true,
    "msg":"aqui se insertaran usuarios"
  })
)

//eliminar usuario 
app.delete('/api/v1/devcamp/usuario/:id', (request, response)=>
response
  .status(200)
  .json({
    "success": true,
    "msg":`aqui se eliminaran usuarios con id ${request.params.id}`
  })
)

//consultar usuario 
app.get('/api/v1/devcamp/usuario', (request, response)=>
response
  .status(200)
  .json({
    "success": true,
    "msg":"aqui se consultaran todos los usuarios  "
  })
)

//consutar usuario por id 
app.get('/api/v1/devcamp/usuario/:id', (request, response)=>
response
  .status(200)
  .json({
    "success": true,
    "msg":`aqui se consultaran todos los usuarios con id  ${request.params.id}  `
  })
)

//actualizar usuarios
app.put('/api/v1/devcamp/usuario/:id', (request, response)=>
response
  .status(200)
  .json({
    "success": true,
    "msg":`aqui se actualizaran usuarios con id  ${request.params.id}`
  })
)
//cursos
//actualizar cursos
app.put('/api/v1/devcamp/curso/:id', (request, response)=>
response
  .status(200)
  .json({
    "success": true,
    "msg":`aqui se actualizaran los cursos con id  ${request.params.id}`
  })
)
//crear cursos
app.post('/api/v1/devcamp/cursos', (request, response)=>
response
  .status(200)
  .json({
    "success": true,
    "msg":"aqui se insertaran cursos"
  })
)
//eliminar cursos
app.delete('/api/v1/devcamp/cursos/:id', (request, response)=>
response
  .status(200)
  .json({
    "success": true,
    "msg":`aqui se eliminaran los cursos con id ${request.params.id}`
  })
)
//consultar cursos
app.get('/api/v1/devcamp/cursos', (request, response)=>
response
  .status(200)
  .json({
    "success": true,
    "msg":"aqui se consultaran todos los cursos "
  })
)

//consultar cursos por id 
app.get('/api/v1/devcamp/cursos/:id', (request, response)=>
response
  .status(200)
  .json({
    "success": true,
    "msg":`aqui se consultaran todos los cursos con id  ${request.params.id}`
  })
)

//riviews

//consultar reviews
app.get('/api/v1/devcamp/reviews', (request, response)=>
response
  .status(200)
  .json({
    "success": true,
    "msg":"aqui se consultaran  todas las reviews "
  })
)

//consultar reviews por id 
app.get('/api/v1/devcamp/reviews/:id', (request, response)=>
response
  .status(200)
  .json({
    "success": true,
    "msg":`aqui se consultaran  todas las reviews con id  ${request.params.id}`
  })
)

//crear reviews
app.post('/api/v1/devcamp/reviews', (request, response)=>
response
  .status(200)
  .json({
    "success": true,
    "msg":"aqui se crearan las reviews"
  })
)

//eliminar reviews
app.delete('/api/v1/devcamp/reviews/:id', (request, response)=>
response
  .status(200)
  .json({
    "success": true,
    "msg":`aqui se eliminaran las reviews con id ${request.params.id}`
  })
)






  
  //crear el servidor de aplicacion 
  app.listen(5000 ,
    console.log('servidor ejecutando en puerto ' + 5000));