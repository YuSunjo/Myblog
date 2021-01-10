import { Button, List, Card } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import { StopOutlined } from '@ant-design/icons';

const LikeList = ({ header, data }) => {
    return (
        <div>
            <List
                style={{ marginBottom: 20 }}
                grid={{ gutter: 4, xs: 2, md: 3 }}
                size="small"
                header={<div>{header}</div>}
                loadMore={<div style={{ textAlign: 'center', margin: '10px 0' }}><Button>더보기</Button></div>}
                bordered
                dataSource={data}
                renderItem={(item) => {
                    return (
                        <List.Item style={{ marginTop: 20 }}>
                            <Card actions={[<StopOutlined />]}>
                                <Card.Meta description={item.title} />
                            </Card>
                        </List.Item>
                    );
                }}
            />
        </div>
    );
};

LikeList.prototype = {
    header: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
};

export default LikeList;