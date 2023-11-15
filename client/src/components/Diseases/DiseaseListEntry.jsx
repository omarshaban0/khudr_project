import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';

import '../../styles/diseases_styles.css'
function DiseaseListEntry(props){

  return (
    <div className='disease-list-entry-container'>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header >{props.name}</Accordion.Header>
          <script src="../../scripts/diseaseEntryScript.js"></script>
          <div id="accordianList"></div>
        </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default DiseaseListEntry;

/*
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';

import '../../styles/diseases_styles.css'
function DiseaseListEntry(props){
  async function fetchPlant(plantId) {
    try{
      console.log("hiiiiiiiiii");

        const response = await fetch(`http://localhost:5000/plant/`+plantId);
        if(!response.ok){
            throw new Error(`Failed to fetch plant: ${response.status}`);
        }

        console.log(response);
        return response.json();
    } catch (e){
        console.log(e);
    }
}

async function fetchDisease(diseaseId) {
  try{

      const response = await fetch(`http://localhost:5000/disease/`+diseaseId);
      if(!response.ok){
          throw new Error(`Failed to fetch plant: ${response.status}`);
      }

      return response.json();
  } catch (e){
      console.log(e);
  }
}

  return (
    <div className='disease-list-entry-container'>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>{props.name}</Accordion.Header>
          {JSON.parse(fetchPlant(props.plantId).diseases).map(el => <Accordion.Body>
            <Nav.Link href={`/disease/${el}`}>{fetchDisease(el).name}</Nav.Link>
          </Accordion.Body>)}
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default DiseaseListEntry;

*/