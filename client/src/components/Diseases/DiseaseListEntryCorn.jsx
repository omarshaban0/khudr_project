import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';

import '../../styles/diseases_styles.css'
import '../../styles/styles.css'
function DiseaseListEntry(){
  return (
    <div className='disease-list-entry-container'>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header className="disease-list-entry">CORN</Accordion.Header>
          <Accordion.Body>
            <Nav.Link href={`/disease/apple/healthy`}>HEALTHY</Nav.Link>
          </Accordion.Body>
          <Accordion.Body>
            <Nav.Link href={`/disease/apple/apple-scab`}>NORTHERN LEAF BLIGHT</Nav.Link>
          </Accordion.Body>
          <Accordion.Body>
            <Nav.Link href={`/disease/apple/black-rot`}>COMMON RUST</Nav.Link>
          </Accordion.Body>
          <Accordion.Body>
            <Nav.Link className="header2" href={`/disease/apple/black-rot`}>CERCOSPOA LEAF SPOT</Nav.Link>
          </Accordion.Body>
          
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default DiseaseListEntry;