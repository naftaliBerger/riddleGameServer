import express from 'express';
import {getPlayers, createPlayer,updatePlayer} from '../controllers/playersController.js';

const router = express.Router();
router.get('/', getPlayers);
router.post('/', createPlayer);
router.put('/:id', updatePlayer);

export default router;