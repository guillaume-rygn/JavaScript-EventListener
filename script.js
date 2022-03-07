//FONCTIONNALITÉ 1 :

//2 façons de sélectionner le footer en DOM :
//let footer = document.getElementsByTagName("footer")[0];

let footer = document.querySelector("footer");
let clic = 0

footer.addEventListener("click",function(){
  console.log("clique");
});

//FONCTIONNALITÉ 1-bis

footer.addEventListener("click",function(){
  clic += 1;
  console.log("clic numéro " + clic);
});


//FONCTIONNALITÉ 2

let hamburger = document.querySelector("button.navbar-toggler");
let menu = document.getElementById("navbarHeader");

hamburger.addEventListener("click", function(){
  menu.classList.toggle("collapse");
});



//FONCTIONNALITÉ 3

let cardFirst = document.getElementsByClassName("card")[0];
let button = document.querySelector("button.btn-outline-secondary");

button.addEventListener("click", function(){
  cardFirst.style.color = "red";
});



//FONCTIONNALITÉ 4

let cardSecond = document.getElementsByClassName("card")[1];
let button2 = document.querySelectorAll("button.btn-outline-secondary")[1];


button2.addEventListener("click", function(){
  if (cardSecond.style.color === "green"){
    cardSecond.style.color = "";
  }else {
    cardSecond.style.color = "green";
  };
});


//FONCTIONNALITÉ 5

let header = document.getElementsByTagName("header")[0];
let boostrap = document.querySelector("link");

header.addEventListener("dblclick", function(){
  if (boostrap.href === "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"){
    boostrap.setAttribute("href", "" );
  }else{
    boostrap.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
  };
});



//FONCTIONNALITÉ 6

let buttons = document.querySelectorAll("button.btn-success");

buttons.forEach(button =>{
  button.addEventListener("mouseover",function(){
    let image = button.parentNode.parentNode.parentNode.parentNode.firstElementChild;
    let text = button.parentNode.parentNode.parentNode.firstElementChild;

  if (image.style.width === "20%"){
    image.style.width = "100%";
    text.style.display = "block";
  }else{
    image.style.width = "20%";
    text.style.display = "none";
  };
  });
});



//FONCTIONNALITÉ 7

let arrowRight = document.querySelector("a.btn-secondary");


arrowRight.addEventListener("click", function(){
  let parent = document.querySelectorAll("div.row")[1];
  let firstChild = parent.firstElementChild;
  let lastChild = parent.lastElementChild;
  
  parent.insertBefore(lastChild,firstChild);
});


//FONCTIONNALITÉ 8

let arrowLeft = document.querySelector("a.btn-primary");

arrowLeft.addEventListener("click", function(e){
  e.preventDefault();

  let parent = document.querySelectorAll("div.row")[1];
  let firstChild = parent.firstElementChild;
  let lastChild = parent.lastElementChild;
  
  parent.insertBefore(firstChild,lastChild);
});


//FONCTIONNALITÉ 9

let row = document.querySelectorAll("div.row")[1];
let col = document.querySelectorAll("div.col-md-4");

window.addEventListener('keypress', function (e) {
  if (document.getSelection().anchorNode.textContent === "JS & Events" && window.getSelection().focusOffset === 0) {
      if (e.code == 'KeyQ'){
        row.setAttribute("class", "");
        row.classList.add("row");
        row.classList.add("justify-content-left");

        for (let i=0; i < col.length; i++){
          col[i].setAttribute("class", "");
          col[i].classList.add("col-md-3");
        };
        
      } else if (e.code == 'KeyY'){
        row.setAttribute("class", "");
        row.classList.add("row");
        row.classList.add("justify-content-center");

        for (let i=0; i < col.length; i++){
          col[i].setAttribute("class", "");
          col[i].classList.add("col-md-3");
        };

      } else if (e.code == 'KeyP'){
        row.setAttribute("class", "");
        row.classList.add("row");
        row.classList.add("justify-content-end");

        for (let i=0; i < col.length; i++){
          col[i].setAttribute("class", "");
          col[i].classList.add("col-md-3");
        };

      } else if (e.code == 'KeyB'){
        row.setAttribute("class", "");
        row.classList.add("row");

        for (let i=0; i < col.length; i++){
          col[i].setAttribute("class", "");
          col[i].classList.add("col-md-4");
        };
      };
    };
  });