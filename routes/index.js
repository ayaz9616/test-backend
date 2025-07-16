import express from 'express';
import {homeController,addController,aiController} from '../controllers/mainController.js';
import { allChat,addChatController } from '../controllers/dbController.js';

const router = express.Router();

router.get('/',homeController);
router.post('/add',addController);
router.post('/ai', aiController);
router.get('/allChats', allChat);
router.post('/addChat', addChatController);

export default router;