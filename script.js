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
var cardThree = document.getElementById("music_cardThree");
var cardFour = document.getElementById("music_cardFour");



const playButton = document.getElementById("playContainer");
const pauseButton = document.getElementById("pauseContainer");

let aristNamePlayer = document.getElementById("artistName");
let songTitlePlayer = document.getElementById("songTitle");

let speed = document.getElementById("speed");

const backButton = document.getElementById("backwardContainer");
const forwardButton = document.getElementById("forwardContainer");



/* STOP AUDIO */

const stopAllAudio = () => {

    var audio = document.getElementsByTagName('audio');

    for(i=0; i<audio.length; i++) audio[i].pause();
    for(i=0; i<audio.length; i++) audio[i].currentTime = 0;


  };



/* END OF STOP AUDIO */





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

hidePlayerBar();

stopAllAudio();

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

    hidePlayerBar();
    
    stopAllAudio();
    
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





/* KRANIUM */

const songThree = () => {
    
    const kranium_galpolicy = document.getElementById("kranium_galpolicy");
    
    aristNamePlayer = aristNamePlayer.innerHTML = "Kranium";
    songTitlePlayer = songTitlePlayer.innerHTML = "Gal Policy";
    
    setTimeout(() => {
        kranium_galpolicy.play();
    }, 300);
    
    pauseButton.onclick = () => {
        kranium_galpolicy.pause();
    
        pauseButton.style.display = "none";
        playButton.style.display = "flex";
    
    }
    
    playButton.onclick = () =>{
        kranium_galpolicy.play();
    
        playButton.style.display = "none";
        pauseButton.style.display = "flex";
    }

    
    
    
    }

cardThree.onclick = () => {

    playerPage.style.transform = "translateY(0%)";

    hidePlayerBar();
    
    stopAllAudio();
    
    
    songThree();
    
    
    /* CHANGE SPEED */
    
    speed.onclick = () =>{
    
        if (speed.innerHTML == "1x") {
            speed.innerHTML = "1.2x";
            kranium_galpolicy.playbackRate = "1.2";
        }
    
        else if (speed.innerHTML == "1.2x"){
            speed.innerHTML = "1.5x";
            kranium_galpolicy.playbackRate = "1.5";
        }
    
        else if (speed.innerHTML == "1.5x"){
            speed.innerHTML = "2x";
            kranium_galpolicy.playbackRate = "2";
        }
    
        else if (speed.innerHTML ==  "2x"){
            speed.innerHTML = "3x";
            kranium_galpolicy.playbackRate = "3;"
        }
    
        else if (speed.innerHTML == "3x"){
            speed.innerHTML = "0.5x";
            kranium_galpolicy.playbackRate = "0.5";
        }
    
        else if (speed.innerHTML == "0.5x"){
            speed.innerHTML = "0.8x";
            kranium_galpolicy.playbackRate = "0.8";
        }
    
        else if (speed.innerHTML == "0.8x") {
            speed.innerHTML = "1x";
            kranium_galpolicy.playbackRate = "1";
        }
        
    }
    
    
    /* NEXT TRACK */ 
    
    
    
    
    }
    
    /*END OF KRANIUM*/ 














































/* SNOH */

const songFour = () => {
    
    const snoh_dying = document.getElementById("snoh_dying");
    
    aristNamePlayer = aristNamePlayer.innerHTML = "Snoh Aalegra";
    songTitlePlayer = songTitlePlayer.innerHTML = "Dying 4 Your Love";
    
    setTimeout(() => {
        snoh_dying.play();
    }, 300);
    
    pauseButton.onclick = () => {
        snoh_dying.pause();
    
        pauseButton.style.display = "none";
        playButton.style.display = "flex";
    
    }
    
    playButton.onclick = () =>{
        snoh_dying.play();
    
        playButton.style.display = "none";
        pauseButton.style.display = "flex";
    }

    
    
    
    }

cardFour.onclick = () => {

    playerPage.style.transform = "translateY(0%)";

    hidePlayerBar();
    
    stopAllAudio();
    
    songFour();
    
    
    /* CHANGE SPEED */
    
    speed.onclick = () =>{
    
        if (speed.innerHTML == "1x") {
            speed.innerHTML = "1.2x";
            snoh_dying.playbackRate = "1.2";
        }
    
        else if (speed.innerHTML == "1.2x"){
            speed.innerHTML = "1.5x";
            snoh_dying.playbackRate = "1.5";
        }
    
        else if (speed.innerHTML == "1.5x"){
            speed.innerHTML = "2x";
            snoh_dying.playbackRate = "2";
        }
    
        else if (speed.innerHTML ==  "2x"){
            speed.innerHTML = "3x";
            snoh_dying.playbackRate = "3;"
        }
    
        else if (speed.innerHTML == "3x"){
            speed.innerHTML = "0.5x";
            snoh_dying.playbackRate = "0.5";
        }
    
        else if (speed.innerHTML == "0.5x"){
            speed.innerHTML = "0.8x";
            snoh_dying.playbackRate = "0.8";
        }
    
        else if (speed.innerHTML == "0.8x") {
            speed.innerHTML = "1x";
            snoh_dying.playbackRate = "1";
        }
        
    }
    
    
    /* NEXT TRACK */ 
    
    
    
    
    }
    
    /*END OF SNOH*/ 



















































/* SWIPE GESTURES*/ 


// Create an instance of Hammer with the reference.
var hidePlayer = new Hammer(playerPage);

//enable all directions
hidePlayer.get('swipe').set({
    direction: Hammer.DIRECTION_ALL,
    threshold: 1, 
    velocity:0.1
  });

// Subscribe to a quick start event: press, tap, or doubletap.
// For a full list of quick start events, read the documentation.
hidePlayer.on('swipedown', function(e) {
    e.target.classList.toggle('expand');

  playerPage.style.transform = "translateY(100%)";
  console.log("test");



  var playerBarContainer = document.getElementById("playerBarContainer");

  setTimeout(() => {
    playerBarContainer.style.display = "block";
  }, 210);
  
});

/* END OF SWIPE GESTURES */



const hidePlayerBar = () =>{
    setTimeout(() => {
        playerBarContainer.style.display = "none";
      }, 100);
}

playerBarContainer.onclick = () =>{

   
   
        playerPage.style.transform = "translateY(0%)";
   
}






























    



}











