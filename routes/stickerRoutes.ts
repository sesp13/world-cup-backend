import { Router } from 'express';
import { check } from 'express-validator';
import {
  createSticker,
  createStickerCollection,
  getAllowedStatuses,
  getStickerById,
  getStickers,
  getStickersByUser,
  getStickersByUserAndStatus,
  searchStickers,
  updateSticker,
} from '../controllers/stickerController';
import { checkMetaStickerExists } from '../helpers/metaStickerHelpers';
import { checkAdminRoleMiddleware } from '../middlewares/adminMiddlewares';
import { fieldValidator } from '../middlewares/fieldValidator';
import { validateJWT } from '../middlewares/jwt';
import {
  isAvailableStickerForUserMiddleware,
  updateStickerMiddleware,
} from '../middlewares/stickerMiddlewares';
import { allowedStickerStatuses } from '../models/sticker';

const router = Router();

router.get('/', [validateJWT, checkAdminRoleMiddleware], getStickers);

router.get(
  '/by-id/:id',
  [validateJWT, check('id', 'Invalid id param').isMongoId(), fieldValidator],
  getStickerById
);

router.get('/by-user', [validateJWT], getStickersByUser);

router.get('/allowed-statuses', [validateJWT], getAllowedStatuses);

router.post('/search/:term', [validateJWT], searchStickers);

router.get(
  '/by-user-status/:status',
  [
    validateJWT,
    check(
      'status',
      `Invalid status param, allowed status are ${allowedStickerStatuses}`
    ).isIn(allowedStickerStatuses),
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
      `Invalid status field, allowed status are ${allowedStickerStatuses}`
    )
      .optional()
      .isIn(allowedStickerStatuses),
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
    check('_id', 'invalid _id field').isMongoId(),
    updateStickerMiddleware,
    fieldValidator,
    check('amount', 'Invalid amount field').optional().isInt({ min: 0 }),
    check('status', 'Invalid status field')
      .optional()
      .isIn(allowedStickerStatuses),
    check('metaStickerId', 'Invalid metaStickerId').optional().isMongoId(),
    fieldValidator,
    check('metaStickerId').optional().custom(checkMetaStickerExists),
    fieldValidator,
  ],
  updateSticker
);

export default router;
