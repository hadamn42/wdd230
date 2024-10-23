const bando = document.querySelector("#banner");
const butt = document.querySelector("#bannerbutt");

butt.addEventListener('click', () => {
    bando.classList.add('hide');
});

function disploo() {
    let today = new Date().getDay();
    // let today = 3;

    if (today != 1 && today != 2 && today != 3) {
        bando.classList.add('hide');
    }
}

disploo();