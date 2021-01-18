export const isAdmin = (req, res, next) => {
  if (req.user.role === 'admin') {
    next();
  } else {
    res.status(401).send('admin만 접근 가능합니다.');
  }
};
