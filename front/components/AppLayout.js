import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Row, Col, Input } from 'antd';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import Produce from './Produce';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`;

const AppLayout = ({ children }) => {
    const { me } = useSelector((state) => { return state.user; });
    const thisYear = () => {
        const year = new Date().getFullYear();
        return year;
    };

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item><Link href="/"><a>ballde</a></Link></Menu.Item>
                <Menu.Item>
                    <Link href="/blog"><a>블로그</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <a href="https://github.com/YuSunjo" target="_blank" rel="noreferrer noopener">깃허브</a>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>
                {me ? null : (
                    <Menu.Item>
                        <Link href="/signup"><a>회원가입</a></Link>
                    </Menu.Item>
                )}
                {me ? (
                    <Menu.Item>
                        <Link href="/profile"><a>내 정보</a></Link>
                    </Menu.Item>
                )
                    : null}
            </Menu>
            <div id="ImageHeader">
                <Row>
                    <Col>
                        <h1>Ballde Blog</h1>
                    </Col>
                </Row>
            </div>
            <Row gutter={8}>
                <Col xs={24} md={6}><Produce /></Col>
                <Col xs={24} md={12}>{children}</Col>
                <Col xs={24} md={6}>
                    {me
                        ? <UserProfile />
                        : <LoginForm />}
                </Col>
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