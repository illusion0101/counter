function changeColor(){
    var num = Number(document.getElementById("real-number").innerText);
    var number = document.getElementById("real-number");
    if(num > 0){
        number.style.color = "#ed5151";
    } 
    else if(num == 0){
        number.style.color = "#f5f5f5";
    }
    else{
        number.style.color = "#518ded";
    }
}

document
    .querySelector(".increase-button")
    .addEventListener("click", function(){
        var num = Number(document.getElementById("real-number").innerText) + 1;
        document.getElementById("real-number").innerText = num;
        changeColor();
})

document
    .querySelector(".reset-button")
    .addEventListener("click", function(){
        document.getElementById("real-number").innerText = 0;
        changeColor();
})

document
    .querySelector(".decrease-button")
    .addEventListener("click", function(){
        var num = Number(document.getElementById("real-number").innerText) - 1;
        document.getElementById("real-number").innerText = num;
        changeColor();
})