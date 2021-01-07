import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import PropTypes from 'prop-types';

const UserProfile = ({ setIsLoggedIn }) => {
    const onLogOut = useCallback(() => {
        setIsLoggedIn(false);
    }, []);
    return (
        <Card
            actions={[<div key="like">좋아요한 게시글</div>]}
        >
            <Card.Meta
                avatar={<Avatar>S</Avatar>}
                title="sunjo"
            />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    );
};

UserProfile.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired,
};

export default UserProfile;