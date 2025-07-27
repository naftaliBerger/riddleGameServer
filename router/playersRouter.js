import express from 'express';
import { getPlayers, updatePlayer, register, login,submitScore  } from '../controllers/playersController.js';

const router = express.Router();

router.get('/', getPlayers);
router.put('/:id', updatePlayer);
router.post('/register', register);
router.post('/login', login);
router.post("/submit-score", submitScore);

export default router;













// import express from 'express';
// import {getPlayers, createPlayer,updatePlayer} from '../controllers/playersController.js';

// const router = express.Router();
// router.get('/', getPlayers);
// router.post('/', createPlayer);
// router.put('/:id', updatePlayer);

// export default router;