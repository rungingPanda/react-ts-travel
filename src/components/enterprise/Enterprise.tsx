import React from 'react';
import { Image, Divider, Row, Col, Typography } from 'antd';

interface propsType {
  images: string[]
}
export const Enterprise: React.FC<propsType> = ({ images }) => {
  return <>
    <Divider orientation="left"><Typography.Title type="danger" level={3}>企业合作</Typography.Title></Divider>
    <Row style={{ textAlign: "center" }}>
      {images.map((item, index) => (<Col span={6} key={index}><Image style={{ width: 250 }} src={item}></Image></Col>))}
    </Row>

  </>
}