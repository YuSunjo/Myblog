import { Card, Popover, Button, List, Comment } from 'antd';
import React, { useState, useCallback } from 'react';
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined, HeartTwoTone } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';

// post가 온다.  나중에 여기 동적 라우터로 받아준다.
// 나중에 이부분을 이용할거 ...
const PostCardDetail = ({ post }) => {
    const id = useSelector((state) => { return state.user; });
    const [liked, setLiked] = useState(false);
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const onToggleLike = useCallback(() => {
        setLiked((prev) => { return !prev; });
    }, []);
    const onToggleComment = useCallback(() => {
        setCommentFormOpened((prev) => { return !prev; });
    }, []);
    return (
        <div>
            <Card
                cover={postMessage.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    <RetweetOutlined key="retweet" />,
                    liked
                        ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
                        : <HeartOutlined key="heart" onClick={onToggleLike} />,
                    <MessageOutlined key="comment" onClick={onToggleComment} />,

                    <Popover
                        key="more"
                        content={(
                            <Button.Group>
                                {id && post.User.id === id ? (
                                    <>
                                        <Button>수정</Button>
                                        <Button type="danger">삭제</Button>
                                    </>
                                ) : <Button>신고</Button>}
                            </Button.Group>
                        )}
                    >
                        <EllipsisOutlined />
                    </Popover>,
                ]}
            >
                <Card.Meta description={post.content} />
            </Card>
            {commentFormOpened
            && (
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