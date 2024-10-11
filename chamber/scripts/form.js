document.querySelector('#currentYear').textContent = new Date().getFullYear();

document.querySelector('#lastModified').textContent = 'Last modified on ' + document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


// Adding a timestamp to a form
const submit = document.querySelector('#submit');
const dateSubmit = document.querySelector('#timestamp')
const curDate = new Date();

submit.addEventListener('click', () =>{
	dateSubmit.value = curDate;
})