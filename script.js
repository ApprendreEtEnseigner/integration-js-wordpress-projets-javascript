
// const baliseHTML = document.querySelector('h4');

// console.log(baliseHTML);

// baliseHTML.style.background = 'yellow';

//! ------------------  Click events   --------------------------

const questionContainer = document.querySelector(".clik-event");

const btn1 = document.getElementById("btn-1");
const btn2 = document.querySelector("#btn-2");
const response = document.querySelector("p");

// console.log(response);

// questionContainer.style.borderRadius = "150px";

//  a chaq fois que je click sur balise click-event (stockee ds questionContainer), j'affiche OK
questionContainer.addEventListener("click", () => {
    // questionContainer.style.background = "red";
    questionContainer.classList.toggle("question-cliked");
})

btn1.addEventListener("click", () => {
    response.classList.add("show-response");
    response.style.background = "green";
})

btn2.addEventListener("click", () => {
    response.classList.add("show-response");
    response.style.background = "red";

})


//! ------------------  Mouse Events   --------------------------

// const mousemove = document.querySelector(".mousemove");

// window.addEventListener("mousemove", (e)=> {
//     mousemove.style.left = e.pageX + "px";
//     mousemove.style.top = e.pageY + "px";
// });

// window.addEventListener("mousedown", (e)=> {
//     // ! un elem html ne p p avr 2x meme prprte css, ici transform exist dja ds style.css (pr ne p etre crase, il faut rappeler: translate(-25%, 50%) ). Ici scale augmente de 2x25%
//     mousemove.style.transform = " scale(2) translate(-25%, -25%)";
// });


// window.addEventListener("mouseup", (e)=> {
//     mousemove.style.transform = " scale(1) translate(-50%, -50%)";
//     mousemove.style.border = "2px solid teal";
// });

//! mouseenter semblable hover, c'est quand on entre ds la zone
// questionContainer.addEventListener("mouseenter", () => {
//     questionContainer.style.background = "rgba(0, 0, 0, 0.6)";
// });

// questionContainer.addEventListener("mouseout", () => {
//     questionContainer.style.background = "pink";

//     console.log('ca marche');
// });

// response.addEventListener('mouseover', () => {
//     response.style.transform = "rotate(2deg)";
// });

// -----------------------------------------------
// keypress events 

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

// Pour dynamiser song .,,,,
// const song = (key) => {
//     const audio = new Audio();
//     audio.src = key + '.mp3';
//     audio.play();
// }

// document.addEventListener("keypress", (e) => {
//     key.textContent = e.key;

//     if (e.key === "h"){
//         keypressContainer.style.background = "pink";
//     } else if (e.key === "p"){
//         keypressContainer.style.background = "yellow";
//     } else {
//         keypressContainer.style.background = "red";

//     }
//     // console.log(key);

//     song(e.key);
// });


// -----------------------------------------------------
// scroll event 

const nav = document.querySelector('nav');
console.log(nav);

//! Pas oublier user window pour scroll event 
//* window.scrollY (ou X) recupere la value en px du scroll depuis la debut a la posi actu 
window.addEventListener('scroll', () => {
   if (window.scrollY > 120) {
    nav.style.top = 0;
   } else {
    nav.style.top = "-88px";

   }
})

// ------------------------------------------------------------
// form events

const inputName = document.querySelector("input[type='Text']");
const select = document.querySelector('select');
const form = document.querySelector('form');
let pseudo = "";
let langage = "";
// console.log(select);
inputName.addEventListener("input", (e) => {
    pseudo = e.target.value;
    // console.log(pseudo);
});

select.addEventListener("input", (e) => {
    langage = e.target.value;
    // console.log(langage );
});


form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(cgv.checked);

    if (cgv.checked){
        document.querySelector('form > div').innerHTML = `
            <h3> Pseudo: ${pseudo} </h3>
            <h3> Langage prefere: ${langage} </h3>
        `
    } else {
        alert('Veuillez accepter les cgv');
    }
});

// -----------------------------------------------------
// forEach 

// const boxes = document.getElementsByClassName('box');
// const boxes = document.querySelectorAll('.box');
//  console.log(boxes);

// boxes.forEach( (box) => {
//     box.addEventListener( "click", (e) => {
//         e.target.style.transform = 'scale(0.7)';
//     })
// });

// -------------------------------------------------------
// addEventListener vs onclick 

document.body.onclick = function(){
    console.log(" on click");
};
document.body.onclick = function(){
    console.log(" on scroll");
};