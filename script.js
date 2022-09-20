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
}
