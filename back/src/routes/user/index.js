import express from 'express';

import {
  post_userController,
  loginController,
  logoutController,
} from '@src/routes/user/user.ctrl';
import { isLoggedIn, isNotLoggedIn } from '@src/middlewares/user';
import User from '@src/models/user';

const router = express.Router();

router.post('/', isNotLoggedIn, post_userController);

router.post('/login', isNotLoggedIn, loginController);

router.post('/logout', isLoggedIn, logoutController);

router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      const user = await User.findOne({
        where: { id: req.user.id },
      });
      res.status(200).json(user);
    } else {
      res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

export default router;
