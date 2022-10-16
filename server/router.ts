import { Router } from 'express';
import { getThoughts, createThought } from './controllers/thought.controller';
import { getUsers, createUser } from './controllers/user.controller';

const router = Router();

router.get('/users', getUsers);
router.post('/user', createUser);

router.get('/thoughts', getThoughts);
router.post('/thought', createThought);

export default router;
