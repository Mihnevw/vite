import express from 'express';
import { setCookie } from '../controllers/cookieController.js';

const router = express.Router();

router.get('/set-cookie', setCookie);

export default router;
