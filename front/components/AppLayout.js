import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Row, Col, Input, Button } from 'antd';
import styled from '@emotion/styled';
import Produce from './Produce';

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`;
const Pageheader = styled.div`

`;

const AppLayout = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const thisYear = () => {
        const year = new Date().getFullYear();
        return year;
    };

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item><Link href="/"><a>ballde</a></Link></Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/blog"><a>블로그</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <a href="https://github.com/YuSunjo" target="_blank" rel="noreferrer noopener">깃허브</a>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>
                {isLoggedIn ? (
                    <Menu.Item>
                        <Button>로그아웃</Button>
                    </Menu.Item>
                ) : (
                    <Menu.Item>
                        <Link href="/login"><a>로그인</a></Link>
                    </Menu.Item>
                )}
                {isLoggedIn ? null : (
                    <Menu.Item>
                        <Link href="/signup"><a>회원가입</a></Link>
                    </Menu.Item>
                )}
            </Menu>
            <Pageheader>
                <Row>
                    <Col>
                        <h1>여기다가 사진넣기</h1>
                    </Col>
                </Row>
            </Pageheader>
            <Row gutter={8}>
                <Col xs={24} md={4}><Produce /></Col>
                <Col xs={24} md={20}>{children}</Col>
            </Row>
            <Row>
                <Col>
                    <p>Copyright &copy; <span>{(thisYear())}</span></p>
                </Col>
            </Row>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;