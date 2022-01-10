import React from 'react';
import { Row, Col,Input, Typography, Button} from 'antd';
import log from './image/log.png'
import { ShoppingCartOutlined,UserOutlined } from '@ant-design/icons';
function Nav_bar() {
  const { Search } = Input;
  const onSearch = value => console.log(value);
  const { Text, Link } = Typography;
  return (
    <div style={{backgroundColor:"#faebd7ab",borderRadius:"20px"}}>
    <Row style={{display:"flex",alignItems:"center"}}>
    <Col span={6}><img src={log} alt=""  style={{width:"60%"}}/></Col>
    <Col span={8}> <Search placeholder="input search text" onSearch={onSearch} style={{ width: "100%" }} /></Col>
    <Col span={6} style={{fondSize:"1.3em"}}><ShoppingCartOutlined/> <Text>Card : </Text></Col>
    <Col span={4}><Button  type="primary" style={{backgroundColor:"#ffd591",color:"black"}}>LogIn</Button></Col>
  </Row>
 
    </div>
  )
}

export default Nav_bar
