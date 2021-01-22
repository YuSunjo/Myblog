import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import PostCard from '../components/PostCard';
import { LOAD_USER_REQUEST } from '../reducers/user';
import { LOAD_POSTS_REQUEST } from '../reducers/post';

const Blog = () => {
    const dispatch = useDispatch();
    const { mainPosts } = useSelector((state) => { return state.post; });

    useEffect(() => {
        dispatch({
            type: LOAD_USER_REQUEST,
        });
        dispatch({
            type: LOAD_POSTS_REQUEST,
        });
    });
    return (
        <AppLayout>
            {mainPosts.map((post) => { return <PostCard key={post.id} post={post} />; })}
        </AppLayout>
    );
};

export default Blog;