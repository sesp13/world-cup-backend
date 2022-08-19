import { Router } from 'express';
import { getMetaStickers } from '../controllers/metaStickerController';

const router = Router();

router.get('/', getMetaStickers);

export default router;
