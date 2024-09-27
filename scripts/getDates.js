document.querySelector('#currentYear').textContent = new Date().getFullYear();

document.querySelector('#lastModified').textContent = 'Last modified on ' + document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌙")) {
        document.body.style.setProperty('--body-bg', '#54708c')
        document.body.style.setProperty('--main-bg', '#858dad')
        document.body.style.setProperty('--heading-bg', '#133117')
        document.body.style.setProperty('--text-color', 'white')
        document.body.style.setProperty('--section-bg', '#0b5351')
        document.body.style.setProperty('--nav-background-color', '#0e3c25')
        document.body.style.setProperty('--nav-link-color', 'white')
        document.body.style.setProperty('--card-link', 'yellow')
        document.body.style.setProperty('--nav-active', 'rgba(255,255,255,0.15)') 
        document.body.style.setProperty('--nav-hover', 'rgba(255,255,255,0.5)') 
		modeButton.textContent = "🔆";
	} else {
        document.body.style.setProperty('--body-bg', '#A6979C')
        document.body.style.setProperty('--main-bg', '#EEEEEE')
        document.body.style.setProperty('--heading-bg', '#00a9a5')
        document.body.style.setProperty('--text-color', 'black')
        document.body.style.setProperty('--section-bg', '#F0F7F4')
        document.body.style.setProperty('--nav-background-color', '#0b5351')
        document.body.style.setProperty('--nav-link-color', '#F0F7F4')
        document.body.style.setProperty('--nav-active', 'rgba(0,0,0,0.5)')
        document.body.style.setProperty('--nav-hover', 'rgba(255,255,255,0.3)')       
        document.body.style.setProperty('--card-link', 'blue')
		modeButton.textContent = "🌙";
	}
});

    



