import express from 'express';
import * as c from '../controllers/videogames.controller.js';

const router = express.Router();

router.get('/', c.getVideogames);
router.post('/', c.createVideogame);
router.get('/:id', c.getVideogame);
router.put('/:id', c.updateVideogame);
router.delete('/:id', c.deleteVideogame);

export default router;
