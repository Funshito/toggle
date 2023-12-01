//code to change color from dark mode to light mode

let toggle = document.querySelector(".toggle");
let text = document.querySelector(".toggleText");



function Animatedtoggle() {
    toggle.classList.toggle("active");

    var root = document.querySelector(':root');
    var rootStyles = getComputedStyle(root);
    rootStyles.getPropertyValue('--Very-Dark-Blue-BG');
    rootStyles.getPropertyValue('--Very-Dark-Blue-Top-BG-Pattern');
    rootStyles.getPropertyValue('--Dark-Desaturated-Blue-Card-BG');
    rootStyles.getPropertyValue('--Dark-Desaturated-Blue-Card-BG-hover');
    rootStyles.getPropertyValue('--Desaturated-Blue-Text');
    rootStyles.getPropertyValue('--White-Text');
    rootStyles.getPropertyValue('--dk-Toggle');



    //Dark Mode
    let darkBlue = 'hsl(230, 17%, 14%)';
    let darkBluePattern = 'hsl(232, 19%, 15%)';
    let darkDesaturated = 'hsl(228, 28%, 20%)';
    let darkDesaturatedHover = 'hsl(229, 24%, 28%)';
    let desaturadedText = 'hsl(228, 34%, 66%)';

    let darkToggle = 'linear-gradient to right hsl(210, 78%, 56%), hsl(146, 68%, 55%)';



    //Light Mode
    let whiteBG = `hsl(0, 0%, 100%)`
    let paleBluePattern = `hsl(225, 100%, 98%)`;
    let lightGrayishBlue = 'hsl(227, 47%, 96%)';
    let darkGrayishBlue = 'hsl(228, 12%, 44%)';
    let veryDarkText = 'hsl(230, 17%, 14%)';

    let lightToggle = 'hsl(230, 22%, 74%)';



    if (toggle.classList.contains("active")) {
        text.innerHTML = "Dark Mode";
        root.style.setProperty('--Very-Dark-Blue-BG', whiteBG)
        root.style.setProperty('--Very-Dark-Blue-Top-BG-Pattern', paleBluePattern)
        root.style.setProperty('--Dark-Desaturated-Blue-Card-BG', lightGrayishBlue)
        root.style.setProperty('--Dark-Desaturated-Blue-Card-BG-hover', darkGrayishBlue)
        root.style.setProperty('--Desaturated-Blue-Text', desaturadedText)
        root.style.setProperty('--White-Text', veryDarkText)
        root.style.setProperty('--dk-Toggle', lightToggle)
    }
    else {
        text.innerHTML = "Light Mode";
        root.style.setProperty('--Very-Dark-Blue-BG', darkBlue)
        root.style.setProperty('--Very-Dark-Blue-Top-BG-Pattern', darkBluePattern)
        root.style.setProperty('--Dark-Desaturated-Blue-Card-BG', darkDesaturated)
        root.style.setProperty('--Dark-Desaturated-Blue-Card-BG-hover', darkDesaturatedHover)
        root.style.setProperty('--Desaturated-Blue-Text', whiteBG)
        root.style.setProperty('--White-Text', whiteBG)
        root.style.setProperty('--dk-Toggle', darkToggle)
    }
};




