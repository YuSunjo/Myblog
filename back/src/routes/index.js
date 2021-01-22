import express from 'express';

import admin from '@src/routes/admin/index';
import posts from '@src/routes/posts/index';
import userRouter from '@src/routes/user/index';
import post from '@src/routes/post/index';

const router = express.Router();

router.use('/admin', admin);

router.use('/posts', posts);

router.use('/post', post);

router.use('/user', userRouter);

export default router;
