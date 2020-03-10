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


// var w = window.innerWidth
// || document.documentElement.clientWidth
// || document.body.clientWidth;

// var h = window.innerHeight
// || document.documentElement.clientHeight
// || document.body.clientHeight;

// var x = document.getElementById("demo");
// x.innerHTML = "Browser inner window width: " + w + ", height: " + h + ".";




// path="M0,0c30.20-3.4,18.4-0.6,23.4-0.6c5.7,0.1,10.8,0.9,16.3,2.3
//     c13.5,3.5,26.1,9.6,38.5,16.2c12.3,6.5,21.3,16.8,31.9,25.4c10.8,8.7,21,18.3,31.7,26.9c9.3,7.4,20.9,11.5,31.4,16.7
//     c13.7,6.8,26.8,9.7,41.8,9c21.4-1,40.8-3.7,61.3-10.4c10.9-3.5,18.9-11.3,28.5-17.8c5.4-3.7,10.4-6.7,14.8-11.5
//     c1.9-2.1,3.7-5.5,6.5-6.5"