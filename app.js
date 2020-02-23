const htmlElements = {
    svgText: document.querySelector('.svgText'),
    main: document.querySelector('main'),
}

const variables = {
    counterDivs: 0,
    counter: 0,
    timeOutCoordinatesDivs: 3000,
    classRedStars: '.starRed',
    classYellowStars: '.starYellow',
    classBlueStars: '.starBlue',
    bgcColorRed: '#FA8072',
    bgcColorYellow: 'yellow',
    bgcColorBlue: '#00FFFF',
}

const createDiv = setInterval(() =>{
    let div = document.createElement('div');
    variables.counterDivs < 33 ? div.classList.add('starRed') : '';
    (variables.counterDivs > 33 && variables.counterDivs < 66) ? div.classList.add('starYellow') : '';
    variables.counterDivs > 66 ? div.classList.add('starBlue') : '';
    htmlElements.main.appendChild(div);
    variables.counterDivs++;
    variables.counterDivs === 100 ? clearInterval(createDiv) : '';
}, 0.01);

const coordinatesAndColorStars = function stars(color, htmlClass){
    let askDiv = document.querySelectorAll(htmlClass);
    askDiv.forEach((item) => {
        item.style.top = Math.floor(Math.random() * Math.floor(80)) + '%';
        item.style.left = Math.floor(Math.random() * Math.floor(98)) + '%';
        item.style.backgroundColor = color;
    });
}

const callFunctionStars = setInterval(() => {
    variables.counter ++;
    variables.counter === 3 ? variables.counter = 0 : '';
    variables.counter === 0 ? coordinatesAndColorStars(variables.bgcColorYellow, variables.classYellowStars) : '';
    variables.counter === 1 ? coordinatesAndColorStars(variables.bgcColorRed, variables.classRedStars) : '';
    variables.counter === 2 ? coordinatesAndColorStars(variables.bgcColorBlue, variables.classBlueStars) : '';
}, variables.timeOutCoordinatesDivs);
