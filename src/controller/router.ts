import {Request,Response} from "express"
import { task } from "../instance/instance"
export const getOne =async (req:Request,res:Response)=>{
    const {id} = req.params
    const listId = await task.findByPk(id)
    if(listId){
        res.json(listId)
    }else{
        res.json({error:"não tem nenhuma frase"})
    }

    
}

export const getAll = async (req:Request,res:Response)=>{
    let get_All = await task.findAll()
    res.json({get_All})
}


export const postOne = async (req:Request,res:Response)=>{
    const create = req.body
   
    await task.create(create)
    
    res.json({create})
}


export const putOne = async (req:Request,res:Response)=>{
    const {id} = req.params;
    //informa oque voce quer alterar
    const { title,done} = req.body
    // seleciona a frase
    let getone = await task.findByPk(id);
    
    if(getone){
    //alterando o titulo
       getone.title = title;
    //alterando marcação
       getone.done = done;
       //salvando o valor
       await getone.save()
       res.json({getone})
        
    }else{
        res.json({error:"Nenhuma frase encontrada"})
    }
}


export const  deleteOne = async (req:Request,res:Response)=>{
    //falta somente finalizar o delet one o resto ja ta perfeito
    const {id} = req.params
    if(id){
        await task.destroy({
            where:{
                id
            }
        })
        res.json({sucess:`Item ${id} deletado com sucesso`})
    }else{
        res.json({error: 'Item não encontrado'})
    }
    
    
}
