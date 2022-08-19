import { Router } from 'express';
import { getStickers } from '../controllers/stickerController';
import { validateJWT } from '../middlewares/jwt';

const router = Router();

router.get('/', [validateJWT], getStickers);

export default router;
