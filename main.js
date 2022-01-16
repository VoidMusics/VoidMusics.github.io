/*window.onload = function() {
    alert("Eli");
    
}*/

var played = false;

var vid = document.getElementById("myVideo"); 

function playVid() { 
    document.getElementById("never").style.display="none";
    document.getElementById("vidDiv").style.display="block";
    document.getElementById("cyberbutton").style.display = "none";
    document.getElementById("myVideo").scrollIntoView();
    document.getElementById("myVideo").play();
    played = true;
} 

document.onclick= function(event) {
    if(!played) document.getElementById("myAudio").play();
    played = true;
}

/*window.onload = function() {
    document.getElementById("earthquake").play();
}*/

/*var audio = document.getElementById("audio");
audio.src = URL.createObjectURL("earthquake.mp3");
audio.load();
audio.play();*/

/*var audio = new Audio('earthquake.mp3');
audio.play();*/
/*
var scrolbefore = false;

window.onscroll = function (e) {  
    // called when the window is scrolled.  
    if(scrolbefore) return;
    var audio = new Audio('earthquake.mp3');
    audio.play();

    scrolbefore = true;
    } */