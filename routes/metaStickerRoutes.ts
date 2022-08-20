import { Router } from 'express';
import { check } from 'express-validator';
import {
  createMetaSticker,
  getMetaStickers,
} from '../controllers/metaStickerController';
import { checkGroupExists } from '../helpers/groupHelpers';
import { checkAvailableMetaStickerCode } from '../helpers/metaStickerHelpers';
import { fieldValidator } from '../middlewares/fieldValidator';
import { validateJWT } from '../middlewares/jwt';

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

export default router;
