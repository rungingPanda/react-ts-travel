import React, { Fragment } from 'react';
import styles from './HomePage.module.css'
import { Header, Footer, SideMenu, Carousel1, ProductCollection, Enterprise } from '../../components';
import { Row, Col, Typography } from 'antd'
import { productList1, productList2, productList3 } from './mockups'
import sideImage from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';
import e1 from '../../assets/images/facebook-807588_640.png'
import e2 from '../../assets/images/follow-826033_640.png'
import e3 from '../../assets/images/icon-720944_640.png'
import e4 from '../../assets/images/microsoft-80658_640.png'


export class HomePage extends React.Component {
  render() {
    return (
      <Fragment>
        <Header></Header>
        <div className={styles['page-content']}>
          <Row style={{ marginTop: 20 }}>
            <Col span={6}>
              <SideMenu></SideMenu>
            </Col>
            <Col span={18}>
              <Carousel1></Carousel1>
            </Col>
          </Row>
          <ProductCollection
            title={<Typography.Title level={3} type="warning" >爆款推荐</Typography.Title>}
            sideImage={sideImage}
            products={productList1}
          ></ProductCollection>
          <ProductCollection
            title={<Typography.Title level={3} type="danger" >新品上市</Typography.Title>}
            sideImage={sideImage2}
            products={productList2}
          ></ProductCollection>
          <ProductCollection
            title={<Typography.Title level={3} type="success" >国内游推荐</Typography.Title>}
            sideImage={sideImage3}
            products={productList3}
          ></ProductCollection>
          <Enterprise images={[e1, e2, e3, e4]} ></Enterprise>
        </div>
        <Footer></Footer>
      </Fragment>

    )
  }
}