let elemento = document.querySelector("button");
let elementoH3 = document.querySelector("#mood");
let elementoImg = document.querySelector("#peter");

function random(){
if(elemento.value == "0"){
elementoH3.innerText= "Emo"
elementoImg.setAttribute("src","./assets/img02.gif")
elemento.value = "1"
} else if(elemento.value == "1"){
    elementoH3.innerText= "Emocionado"
    elementoImg.setAttribute("src","./assets/img03.gif")
    elemento.value = "2"
} else if(elemento.value == "2"){
    elementoH3.innerText= "Nerd"
    elementoImg.setAttribute("src","./assets/img01.gif")
    elemento.value = "0"
}
}