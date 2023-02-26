
const startText = document.querySelector("p").textContent;
const textObj = document.querySelector("p");
const correctTextObj = document.querySelector(".correct");
const incorrectTextObj = document.querySelector(".incorrect");

document.addEventListener("keydown",(event) => {
    if (event.key == startText[(correctTextObj.innerHTML).length]){
        if (incorrectTextObj.innerHTML == "") {
            correctTextObj.innerHTML = startText.slice(0,((correctTextObj.innerHTML).length + 1));
            textObj.innerHTML = startText.slice((correctTextObj.innerHTML).length);
            textObj.prepend(correctTextObj,incorrectTextObj)
        }     
        }
    else if(!["Shift","Control","Backspace"," ","Alt"].includes(event.key)){
        if (startText[(correctTextObj.innerHTML).length ] != " ") {
            incorrectTextObj.innerHTML += startText[(correctTextObj.innerHTML).length+(incorrectTextObj.innerHTML).length];
            textObj.innerHTML = startText.slice((correctTextObj.innerHTML).length+(incorrectTextObj.innerHTML).length);
            textObj.prepend(correctTextObj,incorrectTextObj) 
            }       
        }
    if (incorrectTextObj.innerHTML != ""){
        if (event.key == "Backspace"){
            incorrectTextObj.innerHTML = incorrectTextObj.innerHTML.slice(0,(incorrectTextObj.innerHTML).length-1)
            textObj.innerHTML = startText.slice((correctTextObj.innerHTML).length+(incorrectTextObj.innerHTML).length);
            textObj.prepend(correctTextObj,incorrectTextObj) 
        }
    }
})
