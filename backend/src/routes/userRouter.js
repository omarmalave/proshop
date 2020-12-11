import express from 'express';
import {
  authUser,
  getUserProfile,
  registerUser,
} from '../controllers/userController.js';
import protect from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/login', authUser);
router.post('/', registerUser);
router.get('/profile', protect, getUserProfile);

export default router;