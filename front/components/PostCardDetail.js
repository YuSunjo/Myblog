import { Card, Popover, Button, List, Comment } from 'antd';
import React, { useState, useCallback } from 'react';
import {
  HeartOutlined,
  MessageOutlined,
  EllipsisOutlined,
  HeartTwoTone,
} from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
import { useSelector, useDispatch } from 'react-redux';
import CommentForm from './CommentForm';

const PostCardDetail = ({ post }) => {
  const id = useSelector((state) => {
    return state.user.me?.id;
  });
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const onToggleLike = useCallback(() => {
    setLiked((prev) => {
      return !prev;
    });
  }, []);
  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => {
      return !prev;
    });
  }, []);
  return (
    <div>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          liked ? (
            <HeartTwoTone
              twoToneColor="#eb2f96"
              key="heart"
              onClick={onToggleLike}
            />
          ) : (
            <HeartOutlined key="heart" onClick={onToggleLike} />
          ),
          <MessageOutlined key="comment" onClick={onToggleComment} />,

          <Popover
            key="more"
            content={
              <Button.Group>
                {id && post.id === id ? (
                  <>
                    <Button>수정</Button>
                    <Button type="danger">삭제</Button>
                  </>
                ) : (
                  <Button>신고</Button>
                )}
              </Button.Group>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Card.Meta description={post.content} />
      </Card>
      {commentFormOpened && (
        <div>
          <CommentForm post={post} />
          <List
            header={`${post.Comments.length}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => {
              return (
                <li>
                  <Comment
                    author={item.User.nickname}
                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                    content={item.content}
                  />
                </li>
              );
            }}
          />
        </div>
      )}
    </div>
  );
};

export default PostCardDetail;
