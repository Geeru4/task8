
const startText = document.querySelector("p").textContent;
const textObj = document.querySelector("p");
const greenTextObj = document.querySelector(".green");
const redTextObj = document.querySelector(".red");

document.addEventListener("keydown",(event) => {
    if (event.key == startText[(greenTextObj.innerHTML).length]){
        if (redTextObj.innerHTML == "") {
            greenTextObj.innerHTML = startText.slice(0,((greenTextObj.innerHTML).length + 1));
            textObj.innerHTML = startText.slice((greenTextObj.innerHTML).length);
            textObj.prepend(greenTextObj,redTextObj)
        }     
        }
    else if(!["Shift","Control","Backspace"," ","Alt"].includes(event.key)){
        if (startText[(greenTextObj.innerHTML).length ] != " ") {
            redTextObj.innerHTML += startText[(greenTextObj.innerHTML).length+(redTextObj.innerHTML).length];
            textObj.innerHTML = startText.slice((greenTextObj.innerHTML).length+(redTextObj.innerHTML).length);
            textObj.prepend(greenTextObj,redTextObj) 
            }       
        }
    if (redTextObj.innerHTML != ""){
        if (event.key == "Backspace"){
            redTextObj.innerHTML = redTextObj.innerHTML.slice(0,(redTextObj.innerHTML).length-1)
            textObj.innerHTML = startText.slice((greenTextObj.innerHTML).length+(redTextObj.innerHTML).length);
            textObj.prepend(greenTextObj,redTextObj) 
        }
    }
})