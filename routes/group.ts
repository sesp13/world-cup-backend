import { Router } from 'express';
import { getAllGroups } from '../controllers/groupController';

const router = Router();

router.get('/', getAllGroups);

export default router;
