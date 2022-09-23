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


function generateFirstLetterHTML(element){
    return `
        <div onclick="filterByFirstLetter('${element}')" id="${element}" class="letterBox allCenter cp">
            ${element}
        </div>
    `;
}