import { Card } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

const PostCard = ({ post }) => {
    return (
        <div>
            <Card type="inner" title={post.title} extra={<a href="#">More</a>}>
                {post.title}
            </Card>
        </div>
    );
};

PostCard.propTypes = {
    post: PropTypes.object.isRequired,
};

export default PostCard;