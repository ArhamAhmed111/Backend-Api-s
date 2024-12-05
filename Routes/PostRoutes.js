import express from "express";
import { postData } from "../AllData/PostData.js";  // Ensure this file exists and is correct

export const postRoute = express.Router();

// Define a GET route for '/post'
postRoute.get("/", (req, res) => {
    res.status(200).send({ status: 200, message: 'success', data: postData });
});
