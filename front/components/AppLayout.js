import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Row, Col, Input } from 'antd';
import styled from '@emotion/styled';
import Produce from './Produce';

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`;
const Pageheader = styled.div`
    background-img: url('../assets/image/background.jpg');
`;

const AppLayout = ({ children }) => {
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
                    <Link href="#"><a>블로그</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="#"><a>깃허브</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/login"><a>로그인</a></Link>
                </Menu.Item>
            </Menu>
            <Pageheader>
                <Row>
                    <Col xs={24} md={6}>
                        <h1>여기다가 사진넣기</h1>
                    </Col>
                </Row>
            </Pageheader>
            <Row>
                <Col xs={24} md={6}><Produce /></Col>
                <Col xs={24} md={18}>{children}</Col>
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