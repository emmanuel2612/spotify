window.onload = () =>{

    /* MUSIC OBJECTS */

/*const music = [
    {
        artistName: "Tiwa Savage",
        songTitle: "Attention",
        releaseType: "Single"
    },

    {
        artistName: "Wizkid",
        songTitle: "Blow",
        releaseType: "Single"
    }


]; */

/* END OF MUSIC OBJECTS */ 




var playerPage = document.getElementById("playerPage");

var cardOne = document.getElementById("music_cardOne");
var cardTwo = document.getElementById("music_cardTwo");


const playButton = document.getElementById("playContainer");
const pauseButton = document.getElementById("pauseContainer");

let aristNamePlayer = document.getElementById("artistName");
let songTitlePlayer = document.getElementById("songTitle");

let speed = document.getElementById("speed");

const backButton = document.getElementById("backwardContainer");
const forwardButton = document.getElementById("forwardContainer");





/* TIWA SAVAGE*/

const songOne = () => {

    const tiwasavage_attention = document.getElementById("tiwasavage_attention");
    
    aristNamePlayer = aristNamePlayer.innerHTML = "Tiwa Savage";
    songTitlePlayer = songTitlePlayer.innerHTML = "Attention";
    
    setTimeout(() => {
        tiwasavage_attention.play();
    }, 300);
    
    pauseButton.onclick = () => {
        tiwasavage_attention.pause();
    
        pauseButton.style.display = "none";
        playButton.style.display = "flex";
    
    }
    
    playButton.onclick = () =>{
        tiwasavage_attention.play();
    
        playButton.style.display = "none";
        pauseButton.style.display = "flex";
    }
    
    
    }
    

cardOne.onclick = () => {

playerPage.style.transform = "translateY(0%)";

songOne();


/* CHANGE SPEED */

speed.onclick = () =>{

    if (speed.innerHTML == "1x") {
        speed.innerHTML = "1.2x";
        tiwasavage_attention.playbackRate = "1.2";
    }

    else if (speed.innerHTML == "1.2x"){
        speed.innerHTML = "1.5x";
        tiwasavage_attention.playbackRate = "1.5";
    }

    else if (speed.innerHTML == "1.5x"){
        speed.innerHTML = "2x";
        tiwasavage_attention.playbackRate = "2";
    }

    else if (speed.innerHTML ==  "2x"){
        speed.innerHTML = "3x";
        tiwasavage_attention.playbackRate = "3;"
    }

    else if (speed.innerHTML == "3x"){
        speed.innerHTML = "0.5x";
        tiwasavage_attention.playbackRate = "0.5";
    }

    else if (speed.innerHTML == "0.5x"){
        speed.innerHTML = "0.8x";
        tiwasavage_attention.playbackRate = "0.8";
    }

    else if (speed.innerHTML == "0.8x") {
        speed.innerHTML = "1x";
        tiwasavage_attention.playbackRate = "1";
    }

}


/* NEXT TRACK */ 

forwardButton.onclick = () => {
    tiwasavage_attention.

    songTwo();
    
}



}

/* END OF TIWA SAVAGE*/ 












/* WIZKID */

const songTwo = () => {
    
    const wizkid_blow = document.getElementById("wizkid_blow");
    
    aristNamePlayer = aristNamePlayer.innerHTML = "Wizkid";
    songTitlePlayer = songTitlePlayer.innerHTML = "Blow";
    
    setTimeout(() => {
        wizkid_blow.play();
    }, 300);
    
    pauseButton.onclick = () => {
        wizkid_blow.pause();
    
        pauseButton.style.display = "none";
        playButton.style.display = "flex";
    
    }
    
    playButton.onclick = () =>{
        wizkid_blow.play();
    
        playButton.style.display = "none";
        pauseButton.style.display = "flex";
    }
    
    
    }

cardTwo.onclick = () => {

    playerPage.style.transform = "translateY(0%)";
    
    
    
    songTwo();
    
    
    /* CHANGE SPEED */
    
    speed.onclick = () =>{
    
        if (speed.innerHTML == "1x") {
            speed.innerHTML = "1.2x";
            wizkid_blow.playbackRate = "1.2";
        }
    
        else if (speed.innerHTML == "1.2x"){
            speed.innerHTML = "1.5x";
            wizkid_blow.playbackRate = "1.5";
        }
    
        else if (speed.innerHTML == "1.5x"){
            speed.innerHTML = "2x";
            wizkid_blow.playbackRate = "2";
        }
    
        else if (speed.innerHTML ==  "2x"){
            speed.innerHTML = "3x";
            wizkid_blow.playbackRate = "3;"
        }
    
        else if (speed.innerHTML == "3x"){
            speed.innerHTML = "0.5x";
            wizkid_blow.playbackRate = "0.5";
        }
    
        else if (speed.innerHTML == "0.5x"){
            speed.innerHTML = "0.8x";
            wizkid_blow.playbackRate = "0.8";
        }
    
        else if (speed.innerHTML == "0.8x") {
            speed.innerHTML = "1x";
            wizkid_blow.playbackRate = "1";
        }
        
    }
    
    
    /* NEXT TRACK */ 
    
    
    
    
    }
    
    /*END OF WIZKID*/ 







// Create an instance of Hammer with the reference.
var hammer = new Hammer(playerPage);




// Subscribe to a quick start event: press, tap, or doubletap.
// For a full list of quick start events, read the documentation.
hammer.on('swipedown', function(e) {
    e.target.classList.toggle('expand');

  playerPage.style.transform = "translate(100%)";
  console.log("test");

  
  
});

























    



}











