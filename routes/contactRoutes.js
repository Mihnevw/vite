//Дефинира API рутовете, като всяка група от свързани endpoints има отделен файл.
import express from 'express';
import { saveMessage, getMessages } from '../controllers/ContactController.js';

const router = express.Router();

router.post('/', saveMessage);
router.get('/', getMessages);

export default router;
