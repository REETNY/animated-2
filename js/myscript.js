let textbox = document.getElementById("name-writer");
let ham = document.getElementById("ham");
let navCont = document.getElementById("link-cont");
let hamIcon = document.getElementById("icon-ham");
var body = document.getElementsByTagName("body")[0];
console.log(body)


function bubbleFall(){
    document.body.style.overflow = "hidden";
    bubbles = document.createElement("img");
    bubbles.classList.add("eachBubble");
    bubbles.src="imgs/bubble.png";
    body.appendChild(bubbles);
    bubbles.style.left = Math.random() * 100 + "vw";
    bubbles.style.animationDuration = Math.random() * 2.3 + 5 + "s";
}
setInterval(bubbleFall, 3000)


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