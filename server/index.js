import express from  'express'
import dotenv from "dotenv"
import  connectdb from "./configs/db";
import articleRouter from "./articles/routes"


const app =  express();
dotenv.config()
connectdb()
app.use(express.json())

app.use("/articles",articleRouter)
const port = 7000;

app.listen(port , console.log(`The server is running on port ${port}`))


