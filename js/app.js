const htmlElements = {
    svgContainer: document.querySelector('svg'), 
    svgText: document.querySelector('.svgText'),
    body : document.querySelector('body'),
    main: document.querySelector('main'),
    moon: document.querySelector('.moon'),
    sun : document.querySelector('.sun'),
    textSiteCompany: document.querySelector('.textSiteCompany'),
    textInternetShop: document.querySelector('.textInternetShop'),
    textBlog: document.querySelector('.textBlog'),
    textPortfolio: document.querySelector('.textPortfolio'),
    textSocialNetwork: document.querySelector('.textSocialNetwork'),
    textForum: document.querySelector('.textForum'),
    textLanding: document.querySelector('.textLanding'),
    textGameSours: document.querySelector('.textGameSours'),
    closeModalSiteCompany: document.querySelector('.siteCompany button'),
    closeModalInternetShop: document.querySelector('.internetShop button'),
    closeModalBlog: document.querySelector('.blog button'),
    closeModalPortfolio: document.querySelector('.portfolio button'),
    closeModalSocialNetwork: document.querySelector('.socialNetwork button'),
    closeModalForum: document.querySelector('.forum button'),
    closeModalLanding: document.querySelector('.landing button'),
    closeModalGameSours: document.querySelector('.gameSours button'),
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
    linkSvgJSON: 'js/params.json',
    arrSvgElements : ['textSiteCompany', 'textSocialNetwork', 'textForum', 'textGameSours', 'textBlog', 'textLanding', 'textPortfolio', 'textInternetShop'],
    modalWindows : ['.siteCompany', '.socialNetwork', '.forum', '.gameSours', '.blog', '.landing', '.portfolio', '.internetShop'],
}

// attr for <text> in svg --------------------------
const fnwh = function heigthWidth(data){
    const paramsScreen = [300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1150, 1300, 1450, 1600, 1950, 2600];
    for(let i = 0; i <= paramsScreen.length; i++){
        if(window.innerWidth < paramsScreen[i]){
            variables.arrSvgElements.forEach((item) => {
                htmlElements[item].setAttribute('x', data[paramsScreen[i]][item].x);
                htmlElements[item].setAttribute('y', data[paramsScreen[i]][item].y);
            });
            break;
        }
    }
};
fetch(variables.linkSvgJSON).then((response) => {return response.json()}).then((obj) => {fnwh(obj)});


const sizeWindow = window.addEventListener('resize', () => {
    fetch(variables.linkSvgJSON).then((response) => {return response.json()}).then((obj) => {fnwh(obj)});
});
// --------------------------------------------------------------


// function for stars--------------------------------------------
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
// ----------------------------------------------------------------


// functions for modal windows-------------------------------------
const openModal = function openModalWindow(classModal){
    let someModal = document.querySelector(variables.modalWindows[classModal]),
        timeOpen = setInterval(() => {
            if(variables.positionSvgContainer === 100){
                variables.positionModal ++ ;
                variables.positionSun -- ;
            }else{
                variables.positionSvgContainer ++ ;
            }
            variables.positionMoon === -12 ? '' : variables.positionMoon -- ;
            variables.positionModal === -70 ? bgcColorModWin('day') : '';
            htmlElements.svgContainer.style.left = variables.positionSvgContainer + '%';
            htmlElements.moon.style.right = variables.positionMoon + '%';
            htmlElements.sun.style.right = variables.positionSun + '%';
            someModal.style.left = variables.positionModal + '%';
            if(variables.positionModal === 0){
                clearInterval(timeOpen);
                variables.positionSvgContainer = -100;
                variables.positionModal = 0;
                variables.positionMoon = 100;
                variables.bgcColorRedStar = 'transparent';
                variables.bgcColorBlueStar = 'transparent';
                variables.bgcColorYellowStar = 'transparent';
            }
        }, 7.5);
}


const closeModal = function closeModalWindow(number){
    let someModal = document.querySelector(variables.modalWindows[number]),
        timeClose = setInterval(() => {
            if(variables.positionModal === 100){
                variables.positionSvgContainer ++ ;
                variables.positionMoon -- ;
            }else{
                variables.positionModal ++ ;
            }
            variables.positionSun === -12 ? '' : variables.positionSun -- ;
            variables.positionSvgContainer === -70 ? bgcColorModWin('night') : '';
            htmlElements.svgContainer.style.left = variables.positionSvgContainer + '%';
            htmlElements.moon.style.right = variables.positionMoon + '%';
            htmlElements.sun.style.right = variables.positionSun + '%';
            someModal.style.left = variables.positionModal + '%';
            if(variables.positionSvgContainer === 0){
                clearInterval(timeClose);
                variables.positionSvgContainer = 0;
                variables.positionModal = -100;
                variables.positionSun = 100;
                variables.bgcColorRedStar = '#FA8072';
                variables.bgcColorBlueStar = '#00FFFF';
                variables.bgcColorYellowStar = 'yellow';
            }
        }, 7.5);
}

// bgc nigth or day
const bgcColorModWin = function backgroundColorModalWindows(paramsBgcol){
    let color = setInterval(() => {
        if(paramsBgcol === 'day'){
            variables.r1color === 65 ? '' : variables.r1color ++ ;
            variables.r2color === 105 ? '' : variables.r2color ++ ;
            variables.r3color === 225 ? '' : variables.r3color ++ ;
            variables.r4color === 255 ? '' : variables.r4color ++ ;
            variables.r5color === 255 ? '' : variables.r5color ++ ;
            variables.r6color === 255 ? '' : variables.r6color ++ ;
            variables.r1color === 65 && variables.r2color === 105 && variables.r3color === 225 && variables.r4color === 255 && variables.r5color === 255 && variables.r6color === 255? clearInterval(color) : '';
        }else{
            variables.r1color === 3 ? '' : variables.r1color -- ;
            variables.r2color === 12 ? '' : variables.r2color -- ;
            variables.r3color === 113 ? '' : variables.r3color -- ;
            variables.r4color === 65 ? '' : variables.r4color -- ;
            variables.r5color === 105 ? '' : variables.r5color -- ;
            variables.r6color === 225 ? '' : variables.r6color -- ;
            variables.r1color === 3 && variables.r2color === 12 && variables.r3color === 113 && variables.r4color === 65 && variables.r5color === 105 && variables.r6color === 225 ? clearInterval(color) : '';
        }
        htmlElements.body.style.background = `linear-gradient(rgba(${variables.r1color},${variables.r2color},${variables.r3color}, 1) 30%, rgba(${variables.r4color},${variables.r5color},${variables.r6color}, 1) 100%) fixed`;
    }, .01);
}


htmlElements.svgContainer.addEventListener('click', (event) => {
    if(event.target.closest('svg')){
        variables.arrSvgElements.forEach((item, index) => {
            item === event.target.className.baseVal ? openModal(index) : '';
        });
    }
});

htmlElements.closeModalSiteCompany.addEventListener('click', () => {closeModal(0)});
htmlElements.closeModalSocialNetwork.addEventListener('click', () => {closeModal(1)});
htmlElements.closeModalForum.addEventListener('click', () => {closeModal(2)});
htmlElements.closeModalGameSours.addEventListener('click', () => {closeModal(3)});
htmlElements.closeModalBlog.addEventListener('click', () => {closeModal(4)});
htmlElements.closeModalLanding.addEventListener('click', () => {closeModal(5)});
htmlElements.closeModalPortfolio.addEventListener('click', () => {closeModal(6)});
htmlElements.closeModalInternetShop.addEventListener('click', () => {closeModal(7)});
// -------------------------------------------------------------------------------