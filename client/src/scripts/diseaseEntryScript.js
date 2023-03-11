async function fetchPlant(plantId) {
    try{
        console.log("hiiiii");
        fetch(`http://localhost:5000/plant/${plantId}`)
          .then(function(response) {
            return response.json().diseases;
          })
          .then(function(diseasesId) {
            if(Array.isArray(diseasesId)) {
              let html = ""
              for(let diseaseId of diseasesId){
                let diseaseResponse = fetch(`http://localhost:5000/disease/${diseaseId}`)
                let diseaseData = diseaseResponse.json();
                let accordianSection = '<Accordion.Body>';
                accordianSection += `<Nav.Link href={"/disease/${props.diseaseId}"}>${diseaseData.name}</Nav.Link>`;
                accordianSection += '</Accordion.Body>';

                html += accordianSection;
              }
                document.querySelector("accordianList").innerHTML = html;
            } else {
                document.querySelector("accordianList").innerHTML = responseData.error;
            }
          });
    } catch (e){
        console.log(e);
    }
}

/*const apiURL = "http://localhost:5000/plant/";

async function fetchPosts(plantId) {
    try{

        const response = await fetch(apiURL+plantId);

        if(!response.ok){
            throw new Error(`Failed to fetch plant: ${response.status}`);
        }

        return response.json();
    } catch (e){
        console.log(e);
    }
}


function listDiseases(accordianListElementId){
    const accordianListElement = document.getElementById(accordianListElementId);
    const plantId = document.currentScript.getAttribute(`plantId`);
    if(!accordianListElement){
        return;
    }

    fetchPosts(plantId)
        .then((diseases => {}))
        .catch((e) => {
            console.log(e);
        });
}

function postDiseases(disease){
    const anchorElement = document.createElement();
}
*/