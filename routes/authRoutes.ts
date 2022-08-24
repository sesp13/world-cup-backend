import { Router } from 'express';
import { check } from 'express-validator';
import { login, renewSession } from '../controllers/authController';
import { fieldValidator } from '../middlewares/fieldValidator';
import { validateJWT } from '../middlewares/jwt';

const router = Router();

router.get('/renew', [validateJWT], renewSession);

router.post(
  '/login',
  [
    check('email', 'email field is required').notEmpty(),
    check('password', 'password field is required').notEmpty(),
    fieldValidator,
  ],
  login
);

export default router;
