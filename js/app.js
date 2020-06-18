const htmlElements = {
    svgContainer : document.querySelector('svg'), 
    svgText : document.querySelector('.svgText'),
    main : document.querySelector('.slid2'),
    moon : document.querySelector('.moonWeOfffer'),
    sun : document.querySelector('.sunWeOfffer'),
}


const variables = {
    counterDivs : 0,
    counter : 0,
    positionMoon : 0,
    positionSun : 100,
    classRedStars : '.starRed',
    classYellowStars : '.starYellow',
    classBlueStars : '.starBlue',
    bgcColorRedStar : '#FA8072',
    bgcColorYellowStar : 'yellow',
    bgcColorBlueStar : '#00FFFF',
    positionModal : -100,
    positionSvgContainer : 0,
    countRotateSvgContainer : 0,
    r1color : 3,
    r2color : 12,
    r3color : 113,
    r4color : 65,
    r5color : 105,
    r6color : 225,
    linkSvgDataJSON: 'js/svg.json',
    arrSvgElements : ['textSiteCompany', 'textSocialNetwork', 'textForum', 'textGameSours', 'textBlog', 'textLanding', 'textPortfolio', 'textInternetShop'],
    modalWindows : ['.siteCompany', '.socialNetwork', '.forum', '.gameSours', '.blog', '.landing', '.portfolio', '.internetShop'],
    closeModalWindows : ['siteCompanyButton', 'socialNetworkButton', 'forumButton', 'gameSoursButton', 'blogButton', 'landingButton', 'portfolioButton', 'internetShopButton'],
    paramsScreen : [300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1150, 1300, 1450, 1600, 1950, 2600],
}

// position for <text> in svg and animation circle ==========================
const fnwh = function heigthWidth(data){
    if(window.innerHeight < 450){
        htmlElements.svgContainer.innerHTML = data.h450;
    }else{
        for(let i = 0; i <= variables.paramsScreen.length; i++){
            if(window.innerWidth < variables.paramsScreen[i]){
                htmlElements.svgContainer.innerHTML = data[variables.paramsScreen[i]];
                break;
            }
        }
    }
};
fetch(variables.linkSvgDataJSON).then((response) => {return response.json()}).then((obj) => {fnwh(obj)});


const sizeWindow = window.addEventListener('resize', () => {
    fetch(variables.linkSvgDataJSON).then((response) => {return response.json()}).then((obj) => {fnwh(obj)});
});
// ===========================================================================


// function for stars ========================================================
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
    variables.counter === 0 ? coordinatesAndColorStars(variables.bgcColorYellowStar, variables.classYellowStars) : '';
    variables.counter === 1 ? coordinatesAndColorStars(variables.bgcColorRedStar, variables.classRedStars) : '';
    variables.counter === 2 ? coordinatesAndColorStars(variables.bgcColorBlueStar, variables.classBlueStars) : '';
}, 3000);
// ==========================================================================


// functions for modal windows ==============================================
const openModal = function openModalWindow(classModal){
    let someModal = document.querySelector(variables.modalWindows[classModal]);

    htmlElements.svgContainer.style.left = 100 + '%';
    htmlElements.moon.style.right = -35 + '%';
    htmlElements.sun.style.opacity = 1;
    someModal.style.opacity = 1;

    setTimeout(() => {
        bgcColorModWin('day');
        htmlElements.svgContainer.style.opacity = 0;
        htmlElements.moon.style.opacity = 0;
        htmlElements.moon.style.right = 100 + '%';
        htmlElements.svgContainer.style.left = -100 + '%';
        someModal.style.left = 0 + '%';
        htmlElements.sun.style.right = 0 + '%';
        variables.bgcColorRedStar = 'transparent';
        variables.bgcColorBlueStar = 'transparent';
        variables.bgcColorYellowStar = 'transparent';
    }, 1000);
}


const closeModal = function closeModalWindow(classModal){
    let someModal = document.querySelector(variables.modalWindows[classModal]);

    someModal.style.left = 100 + '%';
    htmlElements.sun.style.right = -35 + '%';
    htmlElements.moon.style.opacity = 1;
    htmlElements.svgContainer.style.opacity = 1;

    setTimeout(() => {
        bgcColorModWin('night');
        someModal.style.opacity = 0;
        htmlElements.sun.style.opacity = 0;
        htmlElements.sun.style.right = 100 + '%';
        someModal.style.left = -100 + '%';
        htmlElements.svgContainer.style.left = 0 + '%';
        htmlElements.moon.style.right = 0 + '%';
        variables.bgcColorRedStar = '#FA8072';
        variables.bgcColorBlueStar = '#00FFFF';
        variables.bgcColorYellowStar = 'yellow';
    }, 1000);
}


// bgc night or day
const bgcColorModWin = function backgroundColorModalWindows(paramsBgcol){
    paramsBgcol === 'day' ? htmlElements.main.style.backgroundPositionY = 100 + '%' : htmlElements.main.style.backgroundPositionY = 0 + '%';
}


htmlElements.main.addEventListener('click', (event) => {
    if(event.target.closest('svg')){
        variables.arrSvgElements.forEach((item, index) => {
            item === event.target.className.baseVal ? openModal(index) : '';
        });
    }
    if(event.target.closest('div')){
        variables.closeModalWindows.forEach((item, index) => {
            item === event.target.className ? closeModal(index) : '';
        });
    }
});
// =========================================================================