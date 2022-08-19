import { Router } from 'express';
import { createUser, getUsers } from '../controllers/userController';

const router = Router();

router.get('/', getUsers);
// router.get('/:id', getUser);
router.post('/', [], createUser);
// router.put('/:id', putUser);
// router.delete('/:id', deleteUser);

export default router;
