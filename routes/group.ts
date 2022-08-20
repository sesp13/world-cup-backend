import { Router } from 'express';
import { createGroup, getAllGroups } from '../controllers/groupController';
import { validateJWT } from '../middlewares/jwt';

const router = Router();

router.get('/', getAllGroups);
router.post('/', [validateJWT], createGroup);

export default router;
