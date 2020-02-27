import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {FaFortAwesome, FaCar} from  "react-icons/fa";
import { TiScissorsOutline } from "react-icons/ti";
import { GiLargeDress, GiHamburger, GiWallLight, GiSofa } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";



export default class Landing extends React.Component {
    render() {
        return(
            <React.Fragment>
               <div style={{backgroundColor:'white'}}>
                    <h1 style={{textAlign:'center', marginTop:'20px'}}>Our Best Services For You</h1>
               </div>
               <Container style={{marginTop:'50px',marginBottom:'50px'}}>
                   <Row>
                       <Col sm={3}><FaFortAwesome size={100}/>Party Hall</Col>
                       <Col sm={3}><TiScissorsOutline size={100}/>Saloon</Col>
                       <Col sm={3}>< GiHamburger size={100}/>Catering Services</Col>
                       <Col sm={3}><GiLargeDress size={100}/>Dress Designer</Col>
                   </Row>
                   <br/> <br/>
                   <Row>
                       <Col sm={3}><IoIosPeople size={100}/>Event Organiser</Col>
                       <Col sm={3}><GiSofa size={100}/>Stage Decoration</Col>
                       <Col sm={3}><GiWallLight size={100}/>Lightning Decoration</Col>
                       <Col sm={3}><FaCar size={100}/>Rent a Car</Col>
                   </Row>
               </Container>
            </React.Fragment>
        )
    }
}