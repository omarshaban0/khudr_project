import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';

import '../../styles/diseases_styles.css'
function DiseaseListEntry(){
  return (
    <div className='disease-list-entry-container'>
      <Accordion className="disease-list-entry" defaultActiveKey="0">
      <Accordion.Item  eventKey="1">
        <Accordion.Header >APPLE</Accordion.Header>
          <Accordion.Body>
            <Nav.Link href={`/disease/apple/healthy`}>HEALTHY</Nav.Link>
          </Accordion.Body>
          <Accordion.Body>
            <Nav.Link href={`/disease/apple/apple-scab`}>APPLE SCAB</Nav.Link>
          </Accordion.Body>
          <Accordion.Body>
            <Nav.Link href={`/disease/apple/black-rot`}>BLACK ROT</Nav.Link>
          </Accordion.Body>
          
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default DiseaseListEntry;