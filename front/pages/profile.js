import React from 'react';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import LikeList from '../components/LikeList';

const Profile = () => {
    const LikeLists = [{ title: 'sdfsdf' }, { title: 'sdfsdfs' }];

    return (
        <>
            <AppLayout>
                <NicknameEditForm />
                <LikeList header="좋아요 한 글" data={LikeLists} />
            </AppLayout>
        </>
    );
};

export default Profile;