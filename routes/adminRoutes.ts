import { Router } from 'express';
import { check } from 'express-validator';
import { createSoccerTeam } from '../controllers/adminController';
import { checkAdminRoleMiddleware } from '../middlewares/adminMiddlewares';
import { fieldValidator } from '../middlewares/fieldValidator';
import { validateJWT } from '../middlewares/jwt';

const router = Router();

router.post(
  '/create-team',
  [
    validateJWT,
    checkAdminRoleMiddleware,
    check('code', 'code field is required').notEmpty(),
    check('name', 'name field is required').notEmpty(),
    fieldValidator,
  ],
  createSoccerTeam
);

export default router;
