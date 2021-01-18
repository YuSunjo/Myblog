import {
  signupService,
  exUserFind,
  login_userService,
} from '@src/service/user/userService';
import bcrypt from 'bcrypt';

export const post_userController = async (req, res, next) => {
  const { email, nickname, password } = req.body;
  try {
    const exUser = await exUserFind(email);
    if (exUser) {
      return res.status(403).send('이미 사용중인 아이디입니다.');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await signupService(email, nickname, hashedPassword);
    return res.status(200).json('ok');
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const loginController = (req, res, next) => {
  login_userService(req, res, next);
};

export const logoutController = (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('ok');
};
