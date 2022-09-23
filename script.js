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

function generateLandContainerHTML(element){
    return `
        <a class="landBorder"  href="${element['url']}" target="_blank">
            <div class="landContainer">
                <div id="landContent" class="landContentStyling">${element['name']}</div>
                <span id="population" class="populationStyling">${(element['population'] + '').replace('.', ',')} Millionen</span>
            </div>
        </a>
    `;
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

function generateFirstLetterHTML(element){
    return `
        <div onclick="filterByFirstLetter('${element}')" id="${element}" class="letterBox allCenter cp">
            ${element}
        </div>
    `;
}


function filterByFirstLetter(letter){
    render(letter);
}