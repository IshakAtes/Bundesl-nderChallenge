let bundeslaender = [];
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

function render(){
    let renderLand = document.getElementById('renderContainer');
    document.getElementById('headline').innerHTML = 'BUNDESLÄNDER';
    renderLand.innerHTML = '';

    for (let i = 0; i < bundeslaender[0].length; i++) {
        const element = bundeslaender[0][i];
        renderLand.innerHTML += `
            <a class="landBorder"  href="${element['url']}" target="_blank">
                <div class="landContainer">
                    <div id="landContent" class="landContentStyling">${element['name']}</div>
                    <span id="population" class="populationStyling">${element['population']} Millionen</span>
                </div>
            </a>
        `;
    }
    renderLetters();
}


function renderLetters(){
    let renderFirstLetter = document.getElementById('firstLetters');
    renderFirstLetter.innerHTML = '';

    for (let i = 0; i < bundeslaender[0].length; i++) {
        const element = bundeslaender[0][i]['name'][0];
        renderFirstLetter.innerHTML += `
            <div onclick="filterByFirstLetter('${element}')" class="letterBox allCenter cp">
                ${element}
            </div>
        `;
    }
}


function filterByFirstLetter(element){
    let renderLand = document.getElementById('renderContainer');
    renderLand.innerHTML = '';
    for (let i = 0; i < bundeslaender[0].length; i++) {
        const arrayBundesland = bundeslaender[0][i];
        if (arrayBundesland['name'][0] == element) {
            renderLand.innerHTML += `
                <a class="landBorder"  href="${element['url']}" target="_blank">
                    <div class="landContainer">
                        <div id="landContent" class="landContentStyling">${arrayBundesland['name']}</div>
                        <span id="population" class="populationStyling">${arrayBundesland['population']} Millionen</span>
                    </div>
                </a>
            `;
        }
    }
}