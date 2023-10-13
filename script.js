
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