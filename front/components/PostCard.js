import { Card } from 'antd';
import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { HeartTwoTone, HeartOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const id = useSelector((state) => state.user.me?.id);
  const onLike = useCallback(() => {
    console.log('like');
  }, []);

  const onUnLike = useCallback(() => {
    console.log('unlike');
  }, []);

  //   const liked = post.Likers.find((v) => v.id == id);
  return (
    <div>
      <Card
        type="inner"
        title={post.title}
        extra={[
          <div>
            <a href="#">More</a>
          </div>,
          liked ? (
            <HeartTwoTone
              twoToneColor="#ebf96"
              key="heart"
              onClick={onUnLike}
            />
          ) : (
            <HeartOutlined key="heart" onClick={onLike} />
          ),
        ]}
      >
        {post.title}
      </Card>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostCard;
