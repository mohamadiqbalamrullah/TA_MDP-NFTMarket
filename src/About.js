import * as React from 'react';
import './About.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function About(){
    return(

        <Container>
        <Row className="justify-content-md-center">
        <Col xs lg="2">
        </Col>
        <Col md="auto">
        <div className = "accountabout">
                <h3>We are building a next-gen, dedicated and fully decentralized NFT Marketplace for NFT creators, collectors and enthusiasts. Our platform is synergizing DeFi and gamified protocols to achieve a fully autonomous and loyalty driven marketplace </h3>
                <h4>"Make History,mint your quote as an NFT"</h4>
        </div>
          </Col>
        <Col xs lg="2">
        </Col>
        </Row>
      </Container>
    )
}