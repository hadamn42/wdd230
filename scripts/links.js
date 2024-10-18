// const baseURL = "https://hadamn42.github.io/wdd230/";
const linksURL = "data/links.json";
const actLink = document.querySelector("#actLinks");

// Get the data and run the build link list function
async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displaylinks(data.weeks);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

const displaylinks = (data) => {
    data.forEach(week => {
        let weekLinks = document.createElement('li');
        weekLinks.textContent = week.week;
        let linkList = " | ";
        let i = 1;
        week.links.forEach(link => {
            let actLink1 = document.createElement('a');
            actLink1.setAttribute("href", link.url);
            actLink1.textContent = link.title;
            weekLinks.appendChild(actLink1);
            if ( i < week.links.length ) {
                 weekLinks.append(linkList);
            }
            i = i + 1;
           
        });
        // weekLinks.slice(0, -3);
        console.log(weekLinks);
        actLink.appendChild(weekLinks);
        // console.log(actLink);
    });
}

getLinks();