import { Router } from 'express';
import { check } from 'express-validator';
import {
  createGroup,
  getAllGroups,
  updateGroup,
} from '../controllers/groupController';
import {
  checkAvailableGroupCode,
  checkGroupExists,
} from '../helpers/groupHelpers';
import { fieldValidator } from '../middlewares/fieldValidator';
import { updateGroupMiddleware } from '../middlewares/groupMiddlewares';
import { validateJWT } from '../middlewares/jwt';

const router = Router();

router.get('/', getAllGroups);
router.post(
  '/',
  [
    validateJWT,
    check('code', 'code field is required').notEmpty(),
    check('code').custom(checkAvailableGroupCode),
    fieldValidator,
  ],
  createGroup
);

router.put(
  '/',
  [
    validateJWT,
    updateGroupMiddleware
  ],
  updateGroup
);

export default router;
