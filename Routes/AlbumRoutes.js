import express from 'express';
import { albumData } from '../AllData/AlbumData.js';



export const albumRoute = express.Router();




albumRoute.get('/',(req,res)=>{
    res.status(200).send({status:200,message:'sucess',data:albumData})
})