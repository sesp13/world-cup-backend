import { Router } from 'express';
import { getStickers } from '../controllers/stickerController';

const router = Router();

router.get('/', getStickers);

export default router;
