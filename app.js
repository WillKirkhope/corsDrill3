const express = require('express')
const cors = require('cors')
const data = require('./api/studentHomeTown')
const port = parseInt(process.env.PORT || 8080)


const app = express()
app.use(cors())

function getStudentById(data, id){
  for (let i = 0; i < data.length; i++) {
    if(data[i].id == id){
      return data[i]
    }
  }
  return null
}

app.get('/', function(request, response){
  response.json({
    data
  })
})

app.get('/:id', function (request, response){
  var student = getStudentById(data, request.params.id)
  if(!student){
    response.status(404).json({
      error: {
        message: 'No instructor found!'
      }
    })
  }else{
    response.json({
      data: student
    })
  }
})



app.listen(port, () => console.log('Listening on http://localhost:8080'))
