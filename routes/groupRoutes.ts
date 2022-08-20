import { Router } from 'express';
import { check } from 'express-validator';
import { createGroup, getAllGroups } from '../controllers/groupController';
import { checkAvailableGroupCode } from '../helpers/groupHelpers';
import { fieldValidator } from '../middlewares/fieldValidator';
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

export default router;
