// doing a spotlight
const memdb = "data/members.json";
const div = document.querySelector("#spotlights");

async function getMembers() {
	const response = await fetch(memdb);
    const data = await response.json();
    // console.table(data.members);
    displaySpotlight(data.members);
}

const displaySpotlight = (miembros) => {

    let i = "";
    let y = "";
    let x = "";

    

    while (i == y || i == x || y == x){
        i = selectMember(miembros);
        y = selectMember(miembros);
        x = selectMember(miembros);
    }
   
	buildHighlight(miembros[i]);
    buildHighlight(miembros[y]);
    buildHighlight(miembros[x]);
    
}

function selectMember (data){
    let i = "";
    let grade = "";

    while(grade != "Gold" && grade != "Silver") {
        i = Math.floor(Math.random() * 7);
        grade = data[i].mem_level;
    }

    return i;
}

function buildHighlight(z) {
    let mumber = document.createElement('section');
    let imgy = document.createElement('img');
    let lonk = document.createElement('a');

    lonk.setAttribute("href", z.url);
    lonk.setAttribute("target", "_blank");

    imgy.setAttribute("src", z.img);
    imgy.setAttribute("alt", z.name);
    imgy.setAttribute("loading", "lazy");
    imgy.setAttribute("width", "auto");
    imgy.setAttribute("max-width", "340");
    imgy.setAttribute("height", "auto");
    imgy.classList.add('memigmy');

    lonk.appendChild(imgy);
    mumber.appendChild(lonk);
    div.appendChild(mumber);
}

getMembers();