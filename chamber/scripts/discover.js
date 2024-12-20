const visitDisplay = document.querySelector("#visit");
const dateToday = new Date();
const msToDays = 86400000;

let visitDays = window.localStorage.getItem("numVis") || 0;


let visitDiff = dateToday - visitDays;

if (visitDays !== 0) {
    if (visitDiff > msToDays) {
		visitDisplay.textContent = `You last visited ${Math.floor(visitDiff/msToDays)} days ago!`;
	} else {
		visitDisplay.textContent = "Back so soon! Awesome!";
	}
} else {
    visitDisplay.textContent = "Welcome! Let us know if you have any questions";
}


localStorage.setItem("numVis", dateToday);