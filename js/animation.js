//Define DOM elements
const heroImage = document.querySelector("#hero__animation__img");

const tl = document.querySelector("#grid__tl");
const tr = document.querySelector("#grid__tr");
const bl = document.querySelector("#grid__bl");
const br = document.querySelector("#grid__br");

const tlBtn = document.querySelector("#grid__tl__btn");
const trBtn = document.querySelector("#grid__tr__btn");
const blBtn = document.querySelector("#grid__bl__btn");
const brBtn = document.querySelector("#grid__br__btn");

const tlContent = document.querySelector("#grid__tl__content");
const trContent = document.querySelector("#grid__tr__content");
const blContent = document.querySelector("#grid__bl__content");
const brContent = document.querySelector("#grid__br__content");

const projectOne = document.querySelector(".p-1");
const projectTwo = document.querySelector(".p-2");
const projectThree = document.querySelector(".p-3");

/*Define colors and positions*/
const bgColor = "var(--bg)";
const bgColorAlt = "var(--bg-alt)";
const textColor = "var(--text)";
const textColorAlt = "var(--text-alt)";

let tlActive = "translate(5vw) translateY(0)";
let tlHidden = "translateX(-100vw) translateY(-100vh)";

let trActive = "translate(-5vw) translateY(0)";
let trHidden = "translateX(100vw) translateY(-100vh)";

let blActive = "translate(10vw) translateY(7vh)";
/*This is a bit larger because projects go here*/
let blHidden = "translateX(-100vw) translateY(100vh)";

let brActive = "translate(-5vw) translateY(0)";
let brHidden = "translateX(100vw) translateY(100vh)";

/*Define the corner that is open*/
let activeCorner = "";

/*Add an event listener to the window object to listen for resize events*/
window.addEventListener("resize", handleWindowResize);

/*Function that handles the styling when resizing the window*/
function handleWindowResize() {
    /*todo:add code here*/
}

/*Store last reverse animation, ready be played*/
let lastReverseAnimation = "";

/*Play animation function*/
function playAnimation(animation, reverseAnimation) {
    /*todo:add code here*/
}

function playClosingAnimation(reverseAnimation) {
    /*todo:add code here*/
}

/*onClick corner button functions*/
/*todo:There are lots of boiler plates in here. Find a way to minimize them*/
/*function for the top-left button*/
tlBtn.onclick = function () {
    if (activeCorner === "top-left") {
        playClosingAnimation("reverse-animate-top-left");
    } else {
        trBtn.innerHTML = "Experience";
        blBtn.innerHTML = "Project";
        brBtn.innerHTML = "Contact";

        /*Setting the active corner*/
        activeCorner = "top-left";
        tlBtn.innerHTML = "&uarr;<br/>About";

        handleWindowResize();
        playAnimation("animate-top-left", "reverse-animate-top-left");

        /*Change background colors*/
        trBtn.style.background = bgColor;
        brBtn.style.background = bgColor;
        blBtn.style.background = bgColor;
        tlBtn.style.background = bgColorAlt;

        /*Change text colors*/
        trBtn.style.color = textColor;
        brBtn.style.color = textColor;
        blBtn.style.color = textColor;
        tlBtn.style.color = textColorAlt;

        /*Change position of the corner content*/
        trContent.style.transform = trHidden;
        brContent.style.transform = brHidden;
        blContent.style.transform = blHidden;
        tlContent.style.transform = tlActive;
    }
};

/*function for the top-right button*/
trBtn.onclick = function () {
    if (activeCorner === "top-right") {
        playClosingAnimation("reverse-animate-top-right");
    } else {
        tlBtn.innerHTML = "About";
        blBtn.innerHTML = "Project";
        brBtn.innerHTML = "Contact";

        /*Setting the active corner*/
        activeCorner = "top-right";
        trBtn.innerHTML = "&uarr;<br/>Experience";

        handleWindowResize();
        playAnimation("animate-top-right", "reverse-animate-top-right");

        /*Change background colors*/
        trBtn.style.background = bgColorAlt;
        brBtn.style.background = bgColor;
        blBtn.style.background = bgColor;
        tlBtn.style.background = bgColor;

        /*Change text colors*/
        trBtn.style.color = textColorAlt;
        brBtn.style.color = textColor;
        blBtn.style.color = textColor;
        tlBtn.style.color = textColor;

        /*Change position of the corner content*/
        trContent.style.transform = trActive;
        brContent.style.transform = brHidden;
        blContent.style.transform = blHidden;
        tlContent.style.transform = tlHidden;
    }
};

/*function for the bottom-left button */
blBtn.onclick = function () {
    if (activeCorner === "bottom-left") {
        playClosingAnimation("reverse-animate-bottom-left");
    } else {
        tlBtn.innerHTML = "About";
        brBtn.innerHTML = "Contact";
        trBtn.innerHTML = "Experience";

        /*Setting the active corner*/
        activeCorner = "bottom-left";
        blBtn.innerHTML = "Projects<br/>&darr;";

        handleWindowResize();
        playAnimation("animate-top-right", "reverse-animate-top-right");

        /*Change background colors*/
        trBtn.style.background = bgColor;
        brBtn.style.background = bgColor;
        blBtn.style.background = bgColorAlt;
        tlBtn.style.background = bgColor;

        /*Change text colors*/
        trBtn.style.color = textColor;
        brBtn.style.color = textColor;
        blBtn.style.color = textColorAlt;
        tlBtn.style.color = textColor;

        /*Change position of the corner content*/
        trContent.style.transform = trHidden;
        brContent.style.transform = brHidden;
        blContent.style.transform = blActive;
        tlContent.style.transform = tlHidden;
    }
};

/*function for the bottom right button*/
brBtn.onclick = function () {
    if (activeCorner === "bottom-right") {
        playClosingAnimation("reverse-animate-bottom-right");
    } else {
        tlBtn.innerHTML = "About";
        blBtn.innerHTML = "Project";
        trBtn.innerHTML = "Experience";

        /*Setting the active corner*/
        activeCorner = "bottom-right";
        brBtn.innerHTML = "Contact<br/>&darr;";

        handleWindowResize();
        playAnimation("animate-top-right", "reverse-animate-top-right");

        /*Change background colors*/
        trBtn.style.background = bgColor;
        brBtn.style.background = bgColorAlt;
        blBtn.style.background = bgColor;
        tlBtn.style.background = bgColor;

        /*Change text colors*/
        trBtn.style.color = textColor;
        brBtn.style.color = textColorAlt;
        blBtn.style.color = textColor;
        tlBtn.style.color = textColor;

        /*Change position of the corner content*/
        trContent.style.transform = trHidden;
        brContent.style.transform = brActive;
        blContent.style.transform = blHidden;
        tlContent.style.transform = tlHidden;
    }
};







































