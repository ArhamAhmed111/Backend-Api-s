import express from 'express'
import { todosData } from '../AllData/TodosData.js'


export const todoRoute = express.Router()




todoRoute.get('/',(req,res)=>{
    res.status(200).send({status:200,message:'sucess',data:todosData})
})