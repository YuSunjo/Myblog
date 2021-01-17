import User from '@src/models/user';

export const saveUser = (email, nickname, password) => {
  return User.create({
    email,
    nickname,
    password,
  });
};

export const exUserRepository = (email) => {
  return User.findOne({
    where: {
      email,
    },
  });
};

export const findOneUser = async (user) => {
  return await User.findOne({
    where: { id: user.id },
    attributes: {
      exclude: ['password'],
    },
  });
};
