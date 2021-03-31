function fun()
{ 
    document.getElementById("in").value="TEXT WILL BE SHOWN BELOW";
} 
function WhichButton(event){ 
        var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        document.getElementById("color1").style.background=randomColor;
}