document.querySelector('#currentYear').textContent = new Date().getFullYear();

document.querySelector('#lastModified').textContent = 'Last modified on ' + document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// getting the directory and building it up
const url = "data/members.json";
const div = document.querySelector("#members");

async function getMembers() {
	const response = await fetch(url);
    const data = await response.json();
    // console.table(data.members);
    displayMembers(data.members);
}

const displayMembers = (miembros) => {
	miembros.forEach(mimber => {
		let mumber = document.createElement('section');
		let imgy = document.createElement('img');
		let name = document.createElement('p');
		let address = document.createElement('p');
		let phone = document.createElement('p');
		let lonk = document.createElement('a');

		imgy.setAttribute("src", mimber.img);
        imgy.setAttribute("alt", mimber.name);
        imgy.setAttribute("loading", "lazy");
		imgy.setAttribute("width", "auto");
		imgy.setAttribute("max-width", "340");
        imgy.setAttribute("height", "auto");
		imgy.classList.add('memigmy');

		name.textContent = mimber.name;
		name.classList.add('memdisplay');

		address.textContent = mimber.address;
		phone.textContent = mimber.phone;

		lonk.setAttribute("href", mimber.url);
		lonk.textContent = mimber.url;

		mumber.appendChild(imgy);
		mumber.appendChild(name);
		mumber.appendChild(address);
		mumber.appendChild(phone);
		mumber.appendChild(lonk);

		mumber.setAttribute("width", "600");

		div.appendChild(mumber);
	});
}

getMembers();

// Grid/List toggles
const gridbut = document.querySelector('#memgrid');
const listbut = document.querySelector('#memlist');
const display = document.querySelector('article');

gridbut.addEventListener('click', () => {
	display.classList.add('gridmem');
	display.classList.remove('listmem');
	gridbut.classList.add('membuttactive');
	listbut.classList.remove('membuttactive');
});

listbut.addEventListener('click', () => {
	display.classList.add('listmem');
	display.classList.remove('gridmem');
	listbut.classList.add('membuttactive');
	gridbut.classList.remove('membuttactive');
});
