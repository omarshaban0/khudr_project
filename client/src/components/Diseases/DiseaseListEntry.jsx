import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';

import '../../styles/diseases_styles.css'
function DiseaseListEntry(props){
  return (
    <div className='disease-list-entry-container'>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>{props.name}</Accordion.Header>
          <Accordion.Body>
            <Nav.Link href={`/disease/apple/healthy`}>HEALTHY</Nav.Link>
          </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default DiseaseListEntry;