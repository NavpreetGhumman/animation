//onload function
window.onload = pageReady;
function pageReady(){
    //getting elements by id attribute
    var colorChange = document.getElementById("colorChange");
    var colorChange1 = document.getElementById("colorChange1");
    var colorChange2 = document.getElementById("colorChange2");
    
    colorChange.onmouseover = lightOn;
    colorChange1.onmouseover = lightOn1;
    colorChange2.onmouseover = lightOn2;
    
    //light on function
    function lightOn(){
        colorChange.style.fill = "#ededed";
    }
    function lightOn1(){
        colorChange1.style.fill = "#ededed";
    }
    function lightOn2(){
        colorChange2.style.fill = "#ededed";
    }
    
    colorChange.onmouseout = lightOff;
    colorChange1.onmouseout = lightOff1;
    colorChange2.onmouseout = lightOff2;
    
    //light off function
    function lightOff(){
        colorChange.style.fill = "#fff";
    }
    function lightOff1(){
        colorChange1.style.fill = "#fff";
    }
    function lightOff2(){
        colorChange2.style.fill = "#fff";
    }
    
}