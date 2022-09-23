let bundeslaender = [];
// let filteredLandContainers = 0;



async function init() {
    await getData();
    render();
}

async function getData(){
    let response = await fetch('./bundesland.json')
    bundesldr = await response.json();
    bundeslaender.push(bundesldr)
    console.log(bundeslaender)
}

function render(letter){
    let renderLand = document.getElementById('renderContainer');
    document.getElementById('headline').innerHTML = 'BUNDESLÄNDER';
    renderLand.innerHTML = '';

    for (let i = 0; i < bundeslaender[0].length; i++) {
        const element = bundeslaender[0][i];
        const firstLetter = bundeslaender[0][i]['name'][0];

        if (!letter || letter == firstLetter) {
            renderLand.innerHTML += generateLandContainerHTML(element);
        }
    }
    renderLetters();
}


function renderLetters(){
    let renderFirstLetter = document.getElementById('firstLetters');
    renderFirstLetter.innerHTML = '';

    for (let i = 0; i < bundeslaender[0].length; i++) {
        const element = bundeslaender[0][i]['name'][0];
        let letterExist = document.getElementById(`${element}`);
        if (!letterExist) {
            renderFirstLetter.innerHTML += generateFirstLetterHTML(element);
        }
    }
}


function filterByFirstLetter(letter){
    render(letter);
}