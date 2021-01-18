import express from 'express';

import {
  post_userController,
  loginController,
  logoutController,
} from '@src/routes/user/user.ctrl';
import { isLoggedIn, isNotLoggedIn } from '@src/middlewares/user';

const router = express.Router();

router.post('/', isNotLoggedIn, post_userController);

router.post('/login', isNotLoggedIn, loginController);

router.post('/logout', isLoggedIn, logoutController);

export default router;
