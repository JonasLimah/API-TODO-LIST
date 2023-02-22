import express,{Response,Request, Router} from "express";

import cors  from 'cors';
import path from "path";
import {router} from "./router/api";




const server = express()
server.use(cors())
server.use(express.static(path.join(__dirname,"../public")));
server.use(express.urlencoded({extended:true}));

server.use(router);

server.use(router,(req:Request,res:Response)=>{
    res.status(404).json({error:"pagina não encontrada"})
})

console.log("servidor rodando")

server.listen(process.env.PORT);
