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
    const[catagory,setCatagory]=useState("")

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
        items.map(e=>{
            if(e.classification==value){
                console.log(e.category)
                console.log(...e.availableItems)
            }

        })
    } 
    useEffect(()=>{
        summa()
    },[value])
    let icon={
        "Home Living": "https://www.homeliving.my/image/homeliving/image/cache/data/WacwkD3K1623493542-499x281.png",
        "Men":"https://cdn2.vectorstock.com/i/1000x1000/90/31/mens-style-logo-vector-21609031.jpg",
        "Kids": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/happy-kids-logo-design-template-1bd230063d3e309ca5d02d13529fde4c_screen.jpg?ts=1601458689",
        "Women":"https://freedesignfile.com/upload/2017/10/Fashion-women-sign-with-logo-vectors-set-16.jpg"
    }
    const content = (
         <div>
         <p>prodect</p>
         <p>prodect</p>
         </div>
      );
    return (
        <div>
        <div style={{backgroundColor:"antiquewhite"}}>
            <Row style={{margin:"3em"}}>
            {navBar.map(e=>(
                <Popover content={content} title="Title" placement="bottom">
                <Col span={5}>
                    <Avatar size={50} src={icon[e]}/>
                 <Text value={e} style={{marginLeft:"1em"}} onMouseEnter={(e=>(setValue(e.target.getAttribute("value"))))}>{e}</Text>
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
