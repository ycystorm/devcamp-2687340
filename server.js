  const express = require('express')

 //crear ruta
  const bootcampRoutes =require('./rutas/bootcamps')
  const coursesRoutes2 =require('./rutas/courses')
  const riviewsRoutes =require('./rutas/reviews')
  const usersRoutes =require('./rutas/users')

  //crear el objeto principal
  //de la api 
  const app = express();

  //iniciar el objeto app
  app.use("/api/v1/devcamp/bootcamps",bootcampRoutes)

  app.use("/api/v1/devcamp/courses",coursesRoutes2)

  app.use("/api/v1/devcamp/users",usersRoutes)

  app.use("/api/v1/devcamp/riviews",riviewsRoutes)

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