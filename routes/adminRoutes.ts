import { Router } from 'express';
import { check } from 'express-validator';
import {
  createSoccerTeam,
  setUp2022Album,
  setUpTeam,
} from '../controllers/adminController';
import { checkAdminRoleMiddleware } from '../middlewares/adminMiddlewares';
import { fieldValidator } from '../middlewares/fieldValidator';
import { validateJWT } from '../middlewares/jwt';

const basicAdminMiddlewares = [validateJWT, checkAdminRoleMiddleware];

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

router.post('/set-up-team/:code', basicAdminMiddlewares, setUpTeam);

router.post('/set-up-2022-album', basicAdminMiddlewares, setUp2022Album);

export default router;
