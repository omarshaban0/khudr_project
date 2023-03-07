import Dropdown from 'react-bootstrap/Dropdown';
import '../../styles/diseases_styles.css'
function DiseaseListEntry(param){
  return (
    <div>
      <Dropdown className='disease-list-entry-container'>
        <Dropdown.Toggle className="disease-list-entry" variant="success" id="dropdown-basic" bsPrefix="p-0">
          {param.name}
        </Dropdown.Toggle>

        <Dropdown.Menu className='dropdown-menu'>
          <Dropdown.Item className = "disease-list-entry-item"href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default DiseaseListEntry;