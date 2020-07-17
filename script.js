window.onload = () => {

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


    /* Pre-Load Images */ 

    if (document.images) {
        tiwaGif = new Image();
        wizkidGif = new Image();
        kraniumGif = new Image();
        snohGif = new Image();

        tiwaGif.src = "tiwa.gif";
        wizkidGif.src = "wizkid.gif";
        kraniumGif.src = "kranium.gif";
        snohGif.src = "snoh.gif";
    }

    /* Pre-Load Images */



    var playerPage = document.getElementById("playerPage");

    var cardOne = document.getElementById("music_cardOne");
    var cardTwo = document.getElementById("music_cardTwo");
    var cardThree = document.getElementById("music_cardThree");
    var cardFour = document.getElementById("music_cardFour");



    const playButton = document.getElementById("playContainer");
    const pauseButton = document.getElementById("pauseContainer");

    let artistNamePlayer = document.getElementsByClassName("artistName");
    let songTitlePlayer = document.getElementsByClassName("songTitle");

    let speed = document.getElementById("speed");

    const backButton = document.getElementById("backContainer");
    const forwardButton = document.getElementById("forwardContainer");

    var playerBarContainer = document.getElementById("playerBarContainer");
    var playerBarImage = document.getElementById("playerBarImage");

    var heart = document.getElementById("heart");

    var added = document.getElementById("added");


    heart.onclick = () =>{

        added.style.transform = "scale(0,0)";
      

        if (!heart.classList.contains("clickHeart")){
            heart.classList.add("clickHeart");

            removed.style.transform = "scale(0,0)";

            setTimeout(() => {
                removed.style.display = "none";
            }, 200);

            setTimeout(() => {
                added.style.transform = "scale(1,1)";
            }, 450);

            setTimeout(() => {
                added.style.display = "flex";
            }, 350);

            setTimeout(() => {
                added.style.transform = "scale(0,0)";
            }, 3000);

            console.log("I just selected the heart");
        }

        else if (heart.classList.contains("clickHeart")){
            heart.classList.remove("clickHeart");
            console.log("I just removed the heart");

            added.style.transform = "scale(0,0)";

            setTimeout(() => {
                added.style.display = "none";
            }, 200);



            setTimeout(() => {
                removed.style.transform = "scale(1,1)";
            }, 450);

            setTimeout(() => {
                removed.style.display = "flex";
            }, 350);

            setTimeout(() => {
                removed.style.transform = "scale(0,0)";
            }, 3000);

        }

}



    /* STOP AUDIO */

    const stopAllAudio = () => {

        var audio = document.getElementsByTagName('audio');  /* Get all <audio> HTML tags */

        for (i = 0; i < audio.length; i++) audio[i].pause(); /* Iteration */
        for (i = 0; i < audio.length; i++) audio[i].currentTime = 0; /* Iteration */


    };



    /* END OF STOP AUDIO */

    playerBarContainer.onclick = () =>{
        playerPage.style.transform = "translate(0%)";
    }







    /* TIWA SAVAGE*/

    const songOne = () => {

        stopAllAudio();

        albumCover.style.display = "none";

        const tiwasavage_attention = document.getElementById("tiwasavage_attention");



        setTimeout(() => {
            tiwasavage_attention.play();
        }, 300);

        pauseButton.onclick = () => {
            tiwasavage_attention.pause();

            pauseButton.style.display = "none";
            playButton.style.display = "flex";

        }

        playButton.onclick = () => {
            tiwasavage_attention.play();

            playButton.style.display = "none";
            pauseButton.style.display = "flex";
        }



            
        for(var i = 0; i < artistNamePlayer.length; i++) {
            artistNamePlayer[i].innerHTML = "Tiwa Savage";
        }

        for(var i = 0; i < songTitlePlayer.length; i++) {
            songTitlePlayer[i].innerHTML = "Attention";
        }


        playButton.style.display = "none";
        pauseButton.style.display = "flex"; 

        playerPage.style.background = "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url("+tiwaGif.src+") center";

        

        setTimeout(() => {
            playerBarContainer.style.display = "flex";
            playerBarImage.src = tiwaGif.src;

        }, 500);

       

        playerPage.style.transform = "translateY(0%)";


      



        /* CHANGE SPEED */

        speed.onclick = () => {

            if (speed.innerHTML == "1x") {
                speed.innerHTML = "1.2x";
                tiwasavage_attention.playbackRate = "1.2";
            }

            else if (speed.innerHTML == "1.2x") {
                speed.innerHTML = "1.5x";
                tiwasavage_attention.playbackRate = "1.5";
            }

            else if (speed.innerHTML == "1.5x") {
                speed.innerHTML = "2x";
                tiwasavage_attention.playbackRate = "2";
            }

            else if (speed.innerHTML == "2x") {
                speed.innerHTML = "3x";
                tiwasavage_attention.playbackRate = "3;"
            }

            else if (speed.innerHTML == "3x") {
                speed.innerHTML = "0.5x";
                tiwasavage_attention.playbackRate = "0.5";
            }

            else if (speed.innerHTML == "0.5x") {
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
            tiwasavage_attention.pause();
            tiwasavage_attention.currentTime = 0; 
            songTwo();

            heart.classList.remove("clickHeart");
    }


    }


    cardOne.onclick = () => {

        songOne();



    }

    /* END OF TIWA SAVAGE*/





    /* WIZKID */

    const songTwo = () => {

        stopAllAudio();

        albumCover.style.display = "none";

        const wizkid_blow = document.getElementById("wizkid_blow");

        artistNamePlayer.innerHTML = "Wizkid";
        songTitlePlayer.innerHTML = "Blow";

        setTimeout(() => {
            wizkid_blow.play();
        }, 300);

        pauseButton.onclick = () => {
            wizkid_blow.pause();

            pauseButton.style.display = "none";
            playButton.style.display = "flex";

        }

        playButton.onclick = () => {
            wizkid_blow.play();

            playButton.style.display = "none";
            pauseButton.style.display = "flex";
        }


        for(var i = 0; i < artistNamePlayer.length; i++) {
            artistNamePlayer[i].innerHTML = "Wizkid";
        }

        for(var i = 0; i < songTitlePlayer.length; i++) {
            songTitlePlayer[i].innerHTML = "Blow";
        }

        playButton.style.display = "none";
        pauseButton.style.display = "flex";

        playerPage.style.background = "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url("+wizkidGif.src+") center";

        playerPage.style.transform = "translateY(0%)";

        speed.onclick = () => {

            if (speed.innerHTML == "1x") {
                speed.innerHTML = "1.2x";
                wizkid_blow.playbackRate = "1.2";
            }

            else if (speed.innerHTML == "1.2x") {
                speed.innerHTML = "1.5x";
                wizkid_blow.playbackRate = "1.5";
            }

            else if (speed.innerHTML == "1.5x") {
                speed.innerHTML = "2x";
                wizkid_blow.playbackRate = "2";
            }

            else if (speed.innerHTML == "2x") {
                speed.innerHTML = "3x";
                wizkid_blow.playbackRate = "3;"
            }

            else if (speed.innerHTML == "3x") {
                speed.innerHTML = "0.5x";
                wizkid_blow.playbackRate = "0.5";
            }

            else if (speed.innerHTML == "0.5x") {
                speed.innerHTML = "0.8x";
                wizkid_blow.playbackRate = "0.8";
            }

            else if (speed.innerHTML == "0.8x") {
                speed.innerHTML = "1x";
                wizkid_blow.playbackRate = "1";
            }

        }

            setTimeout(() => {
                playerBarContainer.style.display = "flex";
                playerBarImage.src = wizkidGif.src;
    
            }, 500);


             /* NEXT TRACK */

        forwardButton.onclick = () => {
            wizkid_blow.pause();
            wizkid_blow.currentTime = 0; 
            songThree();

            heart.classList.remove("clickHeart");
    }

     /* LAST TRACK */

        backButton.onclick = () => {
        wizkid_blow.pause();
        wizkid_blow.currentTime = 0; 
        songOne();

        heart.classList.remove("clickHeart");
}
            



    }

    cardTwo.onclick = () => {

        songTwo();

    
        

        } 

    /*END OF WIZKID*/





    /* KRANIUM */

    const songThree = () => {

        stopAllAudio();

        albumCover.style.display = "none";

        const kranium_galpolicy = document.getElementById("kranium_galpolicy");

        artistNamePlayer.innerHTML = "Kranium";
        songTitlePlayer.innerHTML = "Gal Policy";

        setTimeout(() => {
            kranium_galpolicy.play();
        }, 300);

        pauseButton.onclick = () => {
            kranium_galpolicy.pause();

            pauseButton.style.display = "none";
            playButton.style.display = "flex";

        }

        playButton.onclick = () => {
            kranium_galpolicy.play();

            playButton.style.display = "none";
            pauseButton.style.display = "flex";
        }

        
        for(var i = 0; i < artistNamePlayer.length; i++) {
            artistNamePlayer[i].innerHTML = "Kranium";
        }

        for(var i = 0; i < songTitlePlayer.length; i++) {
            songTitlePlayer[i].innerHTML = "Gal Policy";
        }

        playButton.style.display = "none";
        pauseButton.style.display = "flex";

        playerPage.style.background = "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url("+kraniumGif.src+") center";


        playerPage.style.transform = "translateY(0%)";

        
        setTimeout(() => {
            playerBarContainer.style.display = "flex";
            playerBarImage.src = kraniumGif.src;

        }, 500);




        /* CHANGE SPEED */

        speed.onclick = () => {

            if (speed.innerHTML == "1x") {
                speed.innerHTML = "1.2x";
                kranium_galpolicy.playbackRate = "1.2";
            }

            else if (speed.innerHTML == "1.2x") {
                speed.innerHTML = "1.5x";
                kranium_galpolicy.playbackRate = "1.5";
            }

            else if (speed.innerHTML == "1.5x") {
                speed.innerHTML = "2x";
                kranium_galpolicy.playbackRate = "2";
            }

            else if (speed.innerHTML == "2x") {
                speed.innerHTML = "3x";
                kranium_galpolicy.playbackRate = "3;"
            }

            else if (speed.innerHTML == "3x") {
                speed.innerHTML = "0.5x";
                kranium_galpolicy.playbackRate = "0.5";
            }

            else if (speed.innerHTML == "0.5x") {
                speed.innerHTML = "0.8x";
                kranium_galpolicy.playbackRate = "0.8";
            }

            else if (speed.innerHTML == "0.8x") {
                speed.innerHTML = "1x";
                kranium_galpolicy.playbackRate = "1";
            }

        }

         /* NEXT TRACK */

         forwardButton.onclick = () => {
            kranium_galpolicy.pause();
            kranium_galpolicy.currentTime = 0; 
            songFour();

            heart.classList.remove("clickHeart");
    }

    backButton.onclick = () => {
        kranium_galpolicy.pause();
        kranium_galpolicy.currentTime = 0; 
        songTwo();

        heart.classList.remove("clickHeart");
    }





    }

    cardThree.onclick = () => {

        songThree();



        /* NEXT TRACK */




    }

    /*END OF KRANIUM*/














































    /* SNOH */

    const songFour = () => {

        stopAllAudio();

        albumCover.style.display = "none";

        const snoh_dying = document.getElementById("snoh_dying");

        artistNamePlayer.innerHTML = "Snoh Aalegra";
        songTitlePlayer.innerHTML = "Dying 4 Your Love";

        setTimeout(() => {
            snoh_dying.play();
        }, 300);

        pauseButton.onclick = () => {
            snoh_dying.pause();

            pauseButton.style.display = "none";
            playButton.style.display = "flex";

        }

        playButton.onclick = () => {
            snoh_dying.play();

            playButton.style.display = "none";
            pauseButton.style.display = "flex";
        }

        
        for(var i = 0; i < artistNamePlayer.length; i++) {
            artistNamePlayer[i].innerHTML = "Snoh Aalegera";
        }

        for(var i = 0; i < songTitlePlayer.length; i++) {
            songTitlePlayer[i].innerHTML = "Dying 4 Your Love";
        }

        playButton.style.display = "none";
        pauseButton.style.display = "flex";

        playerPage.style.background = "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url("+snohGif.src+") center";

       

        playerPage.style.transform = "translateY(0%)";

        


        setTimeout(() => {
            playerBarContainer.style.display = "flex";
            playerBarImage.src = snohGif.src;

        }, 500);


        /* CHANGE SPEED */

        speed.onclick = () => {

            if (speed.innerHTML == "1x") {
                speed.innerHTML = "1.2x";
                snoh_dying.playbackRate = "1.2";
            }

            else if (speed.innerHTML == "1.2x") {
                speed.innerHTML = "1.5x";
                snoh_dying.playbackRate = "1.5";
            }

            else if (speed.innerHTML == "1.5x") {
                speed.innerHTML = "2x";
                snoh_dying.playbackRate = "2";
            }

            else if (speed.innerHTML == "2x") {
                speed.innerHTML = "3x";
                snoh_dying.playbackRate = "3;"
            }

            else if (speed.innerHTML == "3x") {
                speed.innerHTML = "0.5x";
                snoh_dying.playbackRate = "0.5";
            }

            else if (speed.innerHTML == "0.5x") {
                speed.innerHTML = "0.8x";
                snoh_dying.playbackRate = "0.8";
            }

            else if (speed.innerHTML == "0.8x") {
                speed.innerHTML = "1x";
                snoh_dying.playbackRate = "1";
            }

        }

         /* NEXT TRACK */

         forwardButton.onclick = () => {
            snoh_dying.pause();
            snoh_dying.currentTime = 0; 
            songOne();

            heart.classList.remove("clickHeart");
    }

    backButton.onclick = () => {
        snoh_dying.pause();
        snoh_dying.currentTime = 0; 
        songThree();

        heart.classList.remove("clickHeart");
    }




    }

    cardFour.onclick = () => {

        songFour();

        /* NEXT TRACK */


    }

    /*END OF SNOH*/










    /* SWIPE DOWN GESTURES */


    // Create an instance of Hammer with the reference.
    var hidePlayer = new Hammer(playerPage);

    //enable all directions
    hidePlayer.get('swipe').set({
        direction: Hammer.DIRECTION_ALL,
        threshold: 1,
        velocity: 0.1
    });

    // Subscribe to a quick start event: press, tap, or doubletap.
    // For a full list of quick start events, read the documentation.
    hidePlayer.on('swipedown', function (e) {
        e.target.classList.toggle('expand');

        playerPage.style.transform = "translateY(100%)";
        console.log("test");


    });

    /* END OF SWIPE GESTURES */ 





































   /* DRAG DOWN (PAN) GESTURES 


    // create a simple instance
    // by default, it only adds horizontal recognizers
    var dragPlayer = new Hammer(playerPage);

    // let the pan gesture support all directions.
    // this will block the vertical scrolling on a touch-device while on the element
    dragPlayer.get('pan').set({ direction: Hammer.DIRECTION_ALL });

    // listen to events...
    dragPlayer.on("pandown", function (ev) {
        console.log("drag");

        let mousePosition = event.clientY; // Get Position of mouse

        let playerPagePosition = playerPage.offsetTop;


        playerPage.style.transform = "translateY(" + mousePosition + "px)"; //Player is positioned wherever mouse is

        playerPage.onmouseup = () => {

            if (playerPagePosition <= 50) {
                
                playerPage.style.transform = "translate(0%)";

            }

            else {
                playerPage.style.transform = "translate(100%)";
            }

        }

        this.renderer.setStyle(elem,"transform",`translate3d(0, 0, 0) translate(${xtranslate}px,${ytranslate}px)`);
        

    
    


        }); 

    END OF DRAG DOWN GESTURES */




   let albumCover = document.getElementById("albumCover");


   /* CHALE LET'S GIST */ 

   const podcastCardOne = document.getElementById("podcastCardOne");

   podcastCardOne.onclick = () => {

    podcastOne();

   }



   const podcastOne = () => {

    stopAllAudio();

    heart.style.display = "none";

    const chaleLetsGist = document.getElementById("chaleLetsGist");

    for(var i = 0; i < artistNamePlayer.length; i++) {
        artistNamePlayer[i].innerHTML = "Chale Let's Gist";
    }

    for(var i = 0; i < songTitlePlayer.length; i++) {
        songTitlePlayer[i].innerHTML = "Should your friends support you?";
    }

    albumCover.src="chaleletsgist.jfif";

    if (podcastCardOne.onclick) {
    albumCover.style.display = "block";
    }  



    setTimeout(() => {
        snoh_dying.play();
    }, 300);

    pauseButton.onclick = () => {
        snoh_dying.pause();

        pauseButton.style.display = "none";
        playButton.style.display = "flex";

    }

    playButton.onclick = () => {
        snoh_dying.play();

        playButton.style.display = "none";
        pauseButton.style.display = "flex";
    }

    

    playButton.style.display = "none";
    pauseButton.style.display = "flex";

    playerPage.style.background = "#282828";

   

    playerPage.style.transform = "translateY(0%)";

    


    setTimeout(() => {
        playerBarContainer.style.display = "flex";
        playerBarImage.src = "chaleletsgist.jfif";

    }, 500);


    /* CHANGE SPEED */

    speed.onclick = () => {

        if (speed.innerHTML == "1x") {
            speed.innerHTML = "1.2x";
            snoh_dying.playbackRate = "1.2";
        }

        else if (speed.innerHTML == "1.2x") {
            speed.innerHTML = "1.5x";
            snoh_dying.playbackRate = "1.5";
        }

        else if (speed.innerHTML == "1.5x") {
            speed.innerHTML = "2x";
            snoh_dying.playbackRate = "2";
        }

        else if (speed.innerHTML == "2x") {
            speed.innerHTML = "3x";
            snoh_dying.playbackRate = "3;"
        }

        else if (speed.innerHTML == "3x") {
            speed.innerHTML = "0.5x";
            snoh_dying.playbackRate = "0.5";
        }

        else if (speed.innerHTML == "0.5x") {
            speed.innerHTML = "0.8x";
            snoh_dying.playbackRate = "0.8";
        }

        else if (speed.innerHTML == "0.8x") {
            speed.innerHTML = "1x";
            snoh_dying.playbackRate = "1";
        }

    }


   }




   /* END OF CHALE LETS GIST */




   /* START OF ANIMATICS */


   const podcastCardTwo = document.getElementById("podcastCardTwo");

   podcastCardTwo.onclick = () => {

    podcastTwo();

   }



   const podcastTwo = () => {

    stopAllAudio();

    heart.style.display = "none";

    const theAnimaticsPodcast = document.getElementById("theAnimaticsPodcast");

    for(var i = 0; i < artistNamePlayer.length; i++) {
        artistNamePlayer[i].innerHTML = "The Animatics Podcast";
    }

    for(var i = 0; i < songTitlePlayer.length; i++) {
        songTitlePlayer[i].innerHTML = "Podcast Title Here";
    }

    albumCover.src="animatics.jpg";

    if (podcastCardTwo.onclick) {
    albumCover.style.display = "block";
    }  



    setTimeout(() => {
        snoh_dying.play();
    }, 300);

    pauseButton.onclick = () => {
        snoh_dying.pause();

        pauseButton.style.display = "none";
        playButton.style.display = "flex";

    }

    playButton.onclick = () => {
        snoh_dying.play();

        playButton.style.display = "none";
        pauseButton.style.display = "flex";
    }

    

    playButton.style.display = "none";
    pauseButton.style.display = "flex";

    playerPage.style.background = "#282828";

   

    playerPage.style.transform = "translateY(0%)";

    


    setTimeout(() => {
        playerBarContainer.style.display = "flex";
        playerBarImage.src = "animatics.jpg";

    }, 500);


    /* CHANGE SPEED */

    speed.onclick = () => {

        if (speed.innerHTML == "1x") {
            speed.innerHTML = "1.2x";
            snoh_dying.playbackRate = "1.2";
        }

        else if (speed.innerHTML == "1.2x") {
            speed.innerHTML = "1.5x";
            snoh_dying.playbackRate = "1.5";
        }

        else if (speed.innerHTML == "1.5x") {
            speed.innerHTML = "2x";
            snoh_dying.playbackRate = "2";
        }

        else if (speed.innerHTML == "2x") {
            speed.innerHTML = "3x";
            snoh_dying.playbackRate = "3;"
        }

        else if (speed.innerHTML == "3x") {
            speed.innerHTML = "0.5x";
            snoh_dying.playbackRate = "0.5";
        }

        else if (speed.innerHTML == "0.5x") {
            speed.innerHTML = "0.8x";
            snoh_dying.playbackRate = "0.8";
        }

        else if (speed.innerHTML == "0.8x") {
            speed.innerHTML = "1x";
            snoh_dying.playbackRate = "1";
        }

    }


   }




    /* END OF CHALE LETS GIST */

   



    /* LISTENER PAGE */ 

    const listenerPage = document.getElementById("listenerPage"); 


    const listenerButton = document.getElementById("listenerButton");


    listenerButton.onclick = () => {

        showListener();
    }

    showListener = () =>{

        listenerPage.style.transform = "translateY(0%)";

    }

    /* END OF LISTENER PAGE */


     /* SWIPE DOWN GESTURES */


    // Create an instance of Hammer with the reference.
    var hideListener = new Hammer(listenerPage);

    //enable all directions
    hideListener.get('swipe').set({
        direction: Hammer.DIRECTION_ALL,
        threshold: 1,
        velocity: 0.1
    });

    // Subscribe to a quick start event: press, tap, or doubletap.
    // For a full list of quick start events, read the documentation.
    hideListener.on('swipedown', function (e) {
        e.target.classList.toggle('expand');

        listenerPage.style.transform = "translateY(100%)";
        console.log("test");


    });

    /* END OF SWIPE GESTURES */ 



































































}


















