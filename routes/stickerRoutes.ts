import { Router } from 'express';
import { check } from 'express-validator';
import {
  createSticker,
  createStickerCollection,
  getStickers,
  getStickersByUser,
  getStickersByUserAndStatus,
  updateSticker,
} from '../controllers/stickerController';
import { checkMetaStickerExists } from '../helpers/metaStickerHelpers';
import { checkStickerExists } from '../helpers/stickerHelpers';
import { checkAdminRoleMiddleware } from '../middlewares/adminMiddlewares';
import { fieldValidator } from '../middlewares/fieldValidator';
import { validateJWT } from '../middlewares/jwt';
import { isAvailableStickerForUserMiddleware } from '../middlewares/stickerMiddlewares';
import { allowedStickerStatus } from '../models/sticker';

const router = Router();

router.get('/', [validateJWT, checkAdminRoleMiddleware], getStickers);

router.get('/by-user', [validateJWT], getStickersByUser);

router.get(
  '/by-user-status/:status',
  [
    validateJWT,
    check(
      'status',
      `Invalid status param, allowed status are ${allowedStickerStatus}`
    ).isIn(allowedStickerStatus),
    fieldValidator,
  ],
  getStickersByUserAndStatus
);

router.post(
  '/',
  [
    validateJWT,
    check('metaStickerId', 'The field metaStickerId is required').notEmpty(),
    check('metaStickerId', 'Invalid metaStickerId').isMongoId(),
    check('metaStickerId').custom(checkMetaStickerExists),
    check('amount', 'Invalid amount field').optional().isInt({ min: 0 }),
    check(
      'status',
      `Invalid status field, allowed status are ${allowedStickerStatus}`
    )
      .optional()
      .isIn(allowedStickerStatus),
    fieldValidator,
    isAvailableStickerForUserMiddleware,
  ],
  createSticker
);

router.post('/create-collection', [validateJWT], createStickerCollection);

router.put(
  '/',
  [
    validateJWT,
    check('_id', '_id field is required').notEmpty(),
    check('_id').custom(checkStickerExists),
    fieldValidator,
    check('amount', 'Invalid amount field').optional().isInt({ min: 0 }),
    check('status', 'Invalid status field')
      .optional()
      .isIn(allowedStickerStatus),
    check('metaStickerId', 'Invalid metaStickerId').optional().isMongoId(),
    fieldValidator,
    check('metaStickerId').optional().custom(checkMetaStickerExists),
    fieldValidator,
  ],
  updateSticker
);

export default router;
