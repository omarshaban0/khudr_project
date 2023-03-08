import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom'

import '../../styles/diseases_styles.css'
function DiseaseListEntry(props){
  return (
    <div>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>{props.plant}</Accordion.Header>

        
          {props.map(el => <Accordion.Body>
            <Nav.Link href={`/disease/${el}`}>{el}</Nav.Link>
          </Accordion.Body>)}
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default DiseaseListEntry;