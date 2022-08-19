import { Router } from 'express';
import * as GroupController from '../controllers/groupController';

const router = Router();

router.get('/', GroupController.getAll);

export default router;
