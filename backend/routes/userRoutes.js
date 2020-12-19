import express from 'express'
const router = express.Router()

import {
  authUser,
  getUserProfile,
  updateUserProfile,
  registerUser,
  getUsers,
  deleteUsers,
  getUserById,
  updateUser,
} from '../controller/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)
router
  .route('/:id')
  .delete(protect, admin, deleteUsers)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)
router.route('/').get(protect, admin, getUsers)
router.route('/').post(registerUser)
router.post('/login', authUser)

export default router
