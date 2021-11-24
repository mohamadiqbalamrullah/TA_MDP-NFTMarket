import React from "react";
import "./Profile.css"
import { Container, Row, Col, body, Carousel, CarouselItem, handleSelect, fluid, Image, Figure,  } from 'react-bootstrap';
export default function Profile(){
    return (
  
          <>
              <div>
              <Container>
                <Row className="justify-content-md-center">
                <Col xs lg="2">
                </Col>
                <Col md="auto">
                <div className = "account">
                <img src = "https://cdn0-production-images-kly.akamaized.net/DWGMxRqPhHH_4Y7dOy22oTzAAKc=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2824790/original/030991800_1560139230-20190529193235_IMG_4583-01.jpeg" 
                  />
                  
                    <h1>Mohamad Iqbal Amrullah</h1>
                    <h2>21120119140136</h2>
                    <h3>Free-Account</h3>
                  </div>
                  </Col>
                <Col xs lg="2">
                </Col>
                </Row>
              </Container>
              </div>
          </>
          );
      }
    