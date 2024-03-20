import express  from "express";

import {userSignUp,userLogin} from "../controller/user-controller.js";
import { uploadImage } from "../controller/image-controller.js";

import upload from '../utils/upload.js';


const router =  express.Router();


//signup router
router.post('/signUp',userSignUp);
router.post('/login',userLogin);
//image uplaod router
router.post('/file/upload', upload.single('file'), uploadImage);


export default router;
