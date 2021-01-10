import React from 'react';
import { useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import PostCard from '../components/PostCard';

const Blog = () => {
    const { mainPosts } = useSelector((state) => { return state.post; });
    return (
        <AppLayout>
            {mainPosts.map((post) => { return <PostCard key={post.id} post={post} />; })}
        </AppLayout>
    );
};

export default Blog;