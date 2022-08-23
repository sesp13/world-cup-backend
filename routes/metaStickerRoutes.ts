import { Router } from 'express';
import { check } from 'express-validator';
import {
  createMetaSticker,
  getMetaStickers,
  updateMetaSticker,
} from '../controllers/metaStickerController';
import { checkGroupExists } from '../helpers/groupHelpers';
import { checkAvailableMetaStickerCode } from '../helpers/metaStickerHelpers';
import { fieldValidator } from '../middlewares/fieldValidator';
import { validateJWT } from '../middlewares/jwt';
import { updateMetaStickerMiddleware } from '../middlewares/metaStickerMiddlewares';

const router = Router();

router.get('/', getMetaStickers);

router.post(
  '/',
  [
    validateJWT,
    check('code', 'code field is required').notEmpty(),
    check('code').custom(checkAvailableMetaStickerCode),
    fieldValidator,
    check('groupId', 'groupId field is required').notEmpty(),
    check('groupId', 'Invalid groupId').isMongoId(),
    check('groupId').custom(checkGroupExists),
    fieldValidator,
  ],
  createMetaSticker
);

router.put(
  '/',
  [
    validateJWT,
    updateMetaStickerMiddleware,
    check('groupId', 'Invalid groupId').optional().isMongoId(),
    check('groupId').optional().custom(checkGroupExists),
    fieldValidator,
  ],
  updateMetaSticker
);

export default router;
