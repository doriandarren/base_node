import express from 'express';
import {dev} from '../controllers/dev/devController.js'

const router = express.Router();



router.get('/', dev)


export default router;