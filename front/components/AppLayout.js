import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const AppLayout = ({ children }) => {
    return (
        <div>
            <div>
                <Link href="/"><a>ballde</a></Link>
                <Link href="/profile"><a>프로필</a></Link>
                <Link href="#"><a>블로그</a></Link>
                <Link href="#"><a>깃허브</a></Link>
                <Link href="/signup"><a>회원가입</a></Link>
                <Link href="/login"><a>로그인</a></Link>
            </div>
            {children}
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;