import express from 'express'; 
import { getUsers, addUser, getUserById, deleteUserById, updateUserById } from '../controllers/users.js';

const router = express.Router();

// all the routes will be staring from /users 
router.get('/', getUsers);
router.post('/', addUser);
router.get('/:id', getUserById);
router.delete( '/:id' , deleteUserById);
router.patch( '/:id', updateUserById);

export default router;