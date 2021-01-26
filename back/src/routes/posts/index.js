import express from 'express';

const router = express.Router();
import Post from '@src/models/post';
import Image from '@src/models/image';
import User from '@src/models/user';

// router.get('/', (req, res) => {
//   res.send('post page');
// });

// router.get('/ping', get_post);
router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      // where: { role: 'admin' },
      limit: 10,
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: Image,
        },
        {
          model: User,
        },
      ],
    });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

export default router;
