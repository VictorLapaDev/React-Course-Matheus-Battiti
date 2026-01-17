require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT;

const app = express();
 
//config JSON and form data response
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Solve cors
app.use(cors({credentials: true, origin: "http://localhost:5173"})) //onde o front end fica, porta do react vite 5173

// Upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))

// DB connection
require("./config/db.js")


// routes
const router = require("./routes/Router.js")
app.use(router)

app.listen(port, () => {
    console.log(`App rodando na porta: ${port}`)
})





//comandos utilizados para inicializar o projeto
//npm init -y
//npm i bcryptjs cors dotenv express express-validator jsonwebtoken mongoose multer
//npm i --save-dev nodemon