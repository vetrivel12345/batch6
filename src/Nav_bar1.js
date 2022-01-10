import { Col, Row,Avatar, Image,Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import React from 'react'
import dress from './image/dress.jpg'
import shoes from './image/shoes.jpg'
import women from './image/women.jpg'
import shop from './image/shop.jpg'
import gift from './image/gift.jpg'
import gem from './image/gem.jpg'
import bg from './image/bg.jpg'

function Nav_bar1() {
    const { Text, Link } = Typography;
    return (
        <div>
        <div style={{backgroundColor:"antiquewhite"}}>
            <Row style={{margin:"3em"}}>
            <Col span={4}>
            <Avatar  size="large" src={<Image src={dress} style={{ width: 40 }} />}style={{margin:"1em"}} /> <Text>Clothing </Text>
            </Col>
            <Col span={4}> 
            <Avatar  size="large" src={<Image src={shoes} style={{ width: 40 }} />}style={{margin:"1em"}} /> <Text>Shoes </Text>
            </Col>
            <Col span={4}>
            <Avatar size="large"  src={<Image src={women} style={{ width: 40 }} />}style={{margin:"1em"}} /> <Text>Active wears </Text>
            </Col>
            <Col span={4}>
            <Avatar  size="large" src={<Image src={shop} style={{ width: 40 }} />}style={{margin:"1em"}} /> <Text>accessories </Text>
            </Col>
            <Col span={4}>
            <Avatar  size="large" src={<Image src={gift} style={{ width: 40 }} />}style={{margin:"1em"}} /> <Text>Gift </Text>
            </Col>
            <Col span={4}>
            <Avatar  size="large" src={<Image src={gem} style={{ width: 40 }} />}style={{margin:"1em"}} /> <Text>Inspiration </Text>
            </Col>
            </Row>
            </div>
            <div> <img src={bg} alt="" style={{width:"100%",borderRadius:"20px"}} /></div>
           
        </div>
    )
}

export default Nav_bar1
