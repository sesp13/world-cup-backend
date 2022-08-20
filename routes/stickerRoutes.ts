import { Router } from 'express';
import { check } from 'express-validator';
import { createSticker, getStickers } from '../controllers/stickerController';
import { checkMetaStickerExists } from '../helpers/metaStickerHelpers';
import { fieldValidator } from '../middlewares/fieldValidator';
import { validateJWT } from '../middlewares/jwt';

const router = Router();

router.get('/', [validateJWT], getStickers);
router.post(
  '/',
  [
    validateJWT,
    check('metaStickerId', 'The field metaStickerId is required').notEmpty(),
    check('metaStickerId', 'Invalid metaStickerId').isMongoId(),
    check('metaStickerId').custom(checkMetaStickerExists),
    fieldValidator,
  ],
  createSticker
);

export default router;
