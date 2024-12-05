import express from 'express';
import { commentsData } from '../AllData/CommentsData.js';

export const commentRoute = express.Router();


commentRoute.get('/',(req,res)=>{
    res.status(200).send({status:200,message:'sucess',data:commentsData})
})