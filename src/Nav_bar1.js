import { Col, Row,Avatar, Image,Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react'
import dress from './image/dress.jpg'
import shoes from './image/shoes.jpg'
import women from './image/women.jpg'
import shop from './image/shop.jpg'
import gift from './image/gift.jpg'
import gem from './image/gem.jpg'
import bg from './image/bg.jpg'
import axios from 'axios'
import { Popover, Button } from 'antd';


function Nav_bar1() {
    const { Text, Link } = Typography;
    const[items, setItems]=useState([])
    const[navBar,setNavBar]=useState([])
    const[value,setValue]=useState("")
    let collection = async()=>{
        let data =await  axios.get("https://rcz-backend-arvinth.herokuapp.com/api/shopData")
        setItems(data.data);
        let ItemsWithutDub=[];
        let ItemsWithDub=data.data.map(e=>{
            if(!ItemsWithutDub.includes(e.classification)){
                ItemsWithutDub.push(e.classification)
            }
        })
       setNavBar(ItemsWithutDub)
    }
    useEffect(()=>{
        collection()
        
    },[]);
    const summa=async()=>{
        console.log("hi")
        console.log(value)
    }
    let icon={
        "Men": {dress},
        "Women":{women},
        "Kids": {shop},
        "Home_Living":{gift}
    }
    const content = (
        <div>
          <p>Content</p>
          <p>Content</p>
        </div>
      );
    return (
        <div>
        <div style={{backgroundColor:"antiquewhite"}}>
            <Row style={{margin:"3em"}}>
            {navBar.map(e=>(
                
                <Popover content={content} title="Title" placement="bottom">
                <Col span={5}>
                    <Avatar size={40} src={dress}   />
                 <Text value={e} style={{marginLeft:"1em"}} onMouseEnter={(e=>(setValue(e.target.getAttribute("value")))),summa}>{e}</Text>
                 </Col>
                 </Popover>
            ))}
           
            </Row>
            </div>
            <div> <img src={bg} alt="" style={{width:"100%",borderRadius:"20px"}} /></div>
           
        </div>
    )
}

export default Nav_bar1
