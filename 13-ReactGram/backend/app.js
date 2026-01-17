const express = require("express")
const path = require("path")
const cors = require("cors")

const port = 5000;

const app = express();
 
//config JSON and form data response
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.listen(port, () => {
    console.log(`App rodando na porta: ${port}`)
})





//comandos utilizados para inicializar o projeto
//npm init -y
//npm i bcryptjs cors dotenv express express-validator jsonwebtoken mongoose multer
//npm i --save-dev nodemon