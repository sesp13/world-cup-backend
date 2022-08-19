import { Router } from 'express';
import { createGroup, getAllGroups } from '../controllers/groupController';

const router = Router();

router.get('/', getAllGroups);
router.post('/', createGroup);

export default router;
