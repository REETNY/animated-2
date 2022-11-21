let textbox = document.getElementById("name-writer");
let ham = document.getElementById("ham");
let navCont = document.getElementById("link-cont");
let hamIcon = document.getElementById("icon-ham");

ham.addEventListener('click', openNav);

function openNav(){
    navCont.classList.toggle("openNav");

    if (hamIcon.classList.contains("fa-bars")){
        hamIcon.classList = "fa fa-times"
        hamIcon.style.color = "white"
    }else{
        hamIcon.classList = "fa fa-bars"
        hamIcon.style.color = "black"
    }
}




let message = "Hi my name is Ajide Shamsideen";

let i=0;

function textWriter(){
    if (i<=message.length){
        textbox.innerText = message.slice(0,i);
        i++;
    }
}

setInterval(textWriter, 100);