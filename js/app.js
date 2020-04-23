const htmlElements = {
    svgContainer: document.querySelector('svg'), 
    svgText: document.querySelector('.svgText'),
    main: document.querySelector('main'),
    moon: document.querySelector('.moon'),
    textSiteCompany: document.querySelector('.textSiteCompany'),
    textInternetShop: document.querySelector('.textInternetShop'),
    textBlog: document.querySelector('.textBlog'),
    textPortfolio: document.querySelector('.textPortfolio'),
    textSocialNetwork: document.querySelector('.textSocialNetwork'),
    textForum: document.querySelector('.textForum'),
    textLanding: document.querySelector('.textLanding'),
    textGameSours: document.querySelector('.textGameSours'),
    modalWindows: ['.siteCompany', '.internetShop', '.blog', '.portfolio', '.socialNetwork', '.forum', '.landing', '.gameSours'],
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
    counterDivs: 0,
    counter: 0,
    timeOutCoordinatesDivs: 3000,
    classRedStars: '.starRed',
    classYellowStars: '.starYellow',
    classBlueStars: '.starBlue',
    bgcColorRed: '#FA8072',
    bgcColorYellow: 'yellow',
    bgcColorBlue: '#00FFFF',
    positionModal: -100,
    positionSvgContainer: 0,
    linkSvgJSON: 'js/svg.json',
}


const fnwh = function heigthWidth(data){
    const paramsScreen = [0, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1150, 1300, 1450, 1600, 1950, 2600];
    for(let i = 0; i <= paramsScreen.length; i++){
        if(window.innerWidth < paramsScreen[i]){
            htmlElements.svgContainer.innerHTML = data[paramsScreen[i]];
            break;
        }
    }
};
fetch(variables.linkSvgJSON).then((response) => {return response.json()}).then((obj) => {fnwh(obj)});


const sizeWindow = window.addEventListener('resize', () => {
    fetch(variables.linkSvgJSON).then((response) => {return response.json()}).then((obj) => {fnwh(obj)});
});


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


const openModal = function openModalWindow(number){
    let someModal = document.querySelector(htmlElements.modalWindows[number]),
        timeDown = setInterval(()=>{
            variables.positionModal === 0 ? clearInterval(timeDown) : '';
            htmlElements.svgContainer.style.top = variables.positionSvgContainer + '%';
            someModal.style.top = variables.positionModal + '%'; 
            variables.positionSvgContainer === -100 ? variables.positionModal ++ : variables.positionSvgContainer --;
        }, 5);
}


const closeModal = function closeModalWindow(number){
    let someModal = document.querySelector(htmlElements.modalWindows[number]),
        timeUp = setInterval(()=>{
            variables.positionSvgContainer === 0 ? clearInterval(timeUp) : '';
            htmlElements.svgContainer.style.top = variables.positionSvgContainer + '%';
            someModal.style.top = variables.positionModal + '%';
            variables.positionModal === -100 ? variables.positionSvgContainer ++ : variables.positionModal --;
        }, 5);
}


// htmlElements.textSiteCompany.addEventListener('click', ()=>{openModal(0)});
// htmlElements.textInternetShop.addEventListener('click', ()=>{openModal(1)});
// htmlElements.textBlog.addEventListener('click', ()=>{openModal(2)});
// htmlElements.textPortfolio.addEventListener('click', ()=>{openModal(3)});
// htmlElements.textSocialNetwork.addEventListener('click', ()=>{openModal(4)});
// htmlElements.textForum.addEventListener('click', ()=>{openModal(5)});
// htmlElements.textLanding.addEventListener('click', ()=>{openModal(6)});
// htmlElements.textGameSours.addEventListener('click', ()=>{openModal(7)});
// htmlElements.closeModalSiteCompany.addEventListener('click', ()=>{closeModal(0)});
// htmlElements.closeModalInternetShop.addEventListener('click', ()=>{closeModal(1)});
// htmlElements.closeModalBlog.addEventListener('click', ()=>{closeModal(2)});
// htmlElements.closeModalPortfolio.addEventListener('click', ()=>{closeModal(3)});
// htmlElements.closeModalSocialNetwork.addEventListener('click', ()=>{closeModal(4)});
// htmlElements.closeModalForum.addEventListener('click', ()=>{closeModal(5)});
// htmlElements.closeModalLanding.addEventListener('click', ()=>{closeModal(6)});
// htmlElements.closeModalGameSours.addEventListener('click', ()=>{closeModal(7)});

// var w = window.innerWidth
// || document.documentElement.clientWidth
// || document.body.clientWidth;

// var h = window.innerHeight
// || document.documentElement.clientHeight
// || document.body.clientHeight;

// var x = document.getElementById("demo");
// x.innerHTML = "Browser inner window width: " + w + ", height: " + h + ".";
