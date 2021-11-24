import { Alert, Badge, Container, variant } from "react-bootstrap"
import {Row, Col} from 'react-bootstrap';
import "./Detail.css"
export default function Detail(datanft){

    if (datanft !== undefined  ) {
      console.log(datanft.datanft.description)
    }
  

  return(
    <Container variant="dark">
      <Row>
    {datanft === undefined && (
                <div>
                    <p>
                        Tidak Ada Data yang dipilih
                    </p>
                </div>
            )}
    {datanft !== undefined && (
      <>
        <img src={datanft.datanft.image_url} />
          <h1>
            <Badge bg="secondary">
              {datanft.datanft.name}
            </Badge>
          </h1>
          <p>
            Description : {datanft.datanft.description}
          </p>
          <p>Created At : {datanft.datanft.asset_contract.created_date}</p> 
      </>
    )}
      </Row>
    </Container>
  )
}
