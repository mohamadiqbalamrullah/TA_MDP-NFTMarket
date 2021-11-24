import React from "react";
// import "./Market.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Row, Col } from 'react-bootstrap';
import {  useNavigate } from "react-router";
import APP from "./App";
export default function Market({data, todetail}){
     let market;
     if (data !== undefined) {
          market = data.assets
     }

     const navigate = useNavigate()

     function sendDetail(item, e){
          e.preventDefault();
          todetail(item)
          navigate('/detail');
     }

    return(
                  <Row xs={1} md={2} className="g-4">
                  {market.map((item, index) => (
                         <Col>
                              <Card key = {index}>
                                   <Card.Img variant="top" src={item.image_url} />
                                        <Card.Body>
                                             <Card.Title 
                                                  style={{color:"black"}}
                                                  >{item.name}</Card.Title>
                                                  <Card.Text>
                                                  <Button variant="primary" onClick={(e) => sendDetail(item,e)}>Detail</Button>
                                                  </Card.Text>
                                             </Card.Body>
                                        </Card>
                                   </Col>
                              ))}
                  </Row>
                  

    )
}