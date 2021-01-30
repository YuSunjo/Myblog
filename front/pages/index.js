import React from 'react';
import { Card, Col, Row, Button } from 'antd';
import styled from '@emotion/styled';
import AppLayout from '../components/AppLayout';
import wrapper from '../store/configureStore';
import { END } from 'redux-saga';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';

const Skill = styled.h2`
  margin: 0 auto;
  text-align: center;
`;
const P = styled.p`
  text-align: center;
  margin-bottom: 0;
`;

const Home = () => {
  return (
    <div>
      <AppLayout>
        <div>
          <Skill>Skills</Skill>
          <P>웹 개발 파트별</P>
          <P>프로젝트를 확인 할 수 있습니다.</P>
          <div className="site-card-wrapper">
            <Row gutter={8}>
              <Col span={8}>
                <Card title="Frontend" bordered={false}>
                  <P>HTML, CSS, JQuery</P>
                  <P>React, Vue SPA 개발</P>
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Backend" bordered={false}>
                  <P>NodeJS, SpringBoot</P>
                  <P>RDB, NoSQL 등 DB스키마 설계</P>
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Devops" bordered={false}>
                  <P>Linux, AWS 서버 구축</P>
                  <P>Git 버전 관리</P>
                </Card>
              </Col>
            </Row>
          </div>
          <div className="site-card-wrapper">
            <Row gutter={8}>
              <Col span={12}>
                <Card title="개인 프로젝트" bordered={false}>
                  <P>개인프로젝트</P>
                  <Button>상세보기</Button>
                </Card>
              </Col>
              <Col span={12}>
                <Card title="그룹 프로젝트" bordered={false}>
                  <P>그룹프로젝트</P>
                  <Button>상세보기</Button>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  },
);

export default Home;
