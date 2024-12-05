import express from 'express';
import { photosData } from '../AllData/PhotosData.js';


export const photoRoute = express.Router();

photoRoute.get('/',(req,res)=>{
    res.status(200).send({status:200,message:'sucess',data:photosData})
})