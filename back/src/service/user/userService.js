import {
  saveUser,
  exUserRepository,
  findOneUser,
} from '@src/repository/userRepository';
import passport from 'passport';

export const signupService = (email, nickname, password) => {
  const signupUser = saveUser(email, nickname, password);
  return signupUser;
};

export const exUserFind = (email) => {
  return exUserRepository(email);
};

export const login_userService = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(403).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const fullUserWithoutPassword = findOneUser(user);
      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next);
};
