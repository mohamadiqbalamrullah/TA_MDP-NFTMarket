import React  from 'react';
import "./Home.css";
import { Container, Row, Col, body, Carousel, CarouselItem, handleSelect, fluid } from 'react-bootstrap';

export default function Home({data}){
    let home;
    if (data !== undefined) {
         home = data.assets
         console.log(home)
    }
   return(
   <div>
            {home === undefined && (
                <div>
                    <p>
                        Tidak Ada Data yang dipilih
                    </p>
                </div>
            )}
            {home !== undefined &&  (
                 <>
            {home.map((item, index) => 
               (
                 <>
                    <Carousel activeIndex={index} onSelect={item}>
                         <Carousel.Item>
                              <img
                                   className="d-block w-100 h-70"
                                   src={item.image_url}
                                   alt="LOADING..."
                                   fluid
                              />
                         <Carousel.Caption>
                         <h3>{item.name}</h3>
                         <p>{item.description}</p>
                         </Carousel.Caption>
                         </Carousel.Item>
                    </Carousel>
                 </>
            ))}
            </>
            )}
        
   </div>
   )
}

