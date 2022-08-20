import { Router } from 'express';
import { check } from 'express-validator';
import { createSticker, getStickers } from '../controllers/stickerController';
import { fieldValidator } from '../middlewares/fieldValidator';
import { validateJWT } from '../middlewares/jwt';

const router = Router();

router.get('/', [validateJWT], getStickers);
router.post(
  '/',
  [
    validateJWT,
    check('metaStickerId', 'The field metaStickerId is required')
      .notEmpty()
      .isMongoId(),
    check('amount', 'The amount must be a number').optional().isNumeric(),
    fieldValidator,
  ],
  createSticker
);

export default router;
