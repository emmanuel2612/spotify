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




    var playerPage = document.getElementById("playerPage");

    var cardOne = document.getElementById("music_cardOne");
    var cardTwo = document.getElementById("music_cardTwo");
    var cardThree = document.getElementById("music_cardThree");
    var cardFour = document.getElementById("music_cardFour");



    const playButton = document.getElementById("playContainer");
    const pauseButton = document.getElementById("pauseContainer");

    let aristNamePlayer = document.getElementsByClassName("artistName");
    let songTitlePlayer = document.getElementsByClassName("songTitle");

    let speed = document.getElementById("speed");

    const backButton = document.getElementById("backwardContainer");
    const forwardButton = document.getElementById("forwardContainer");

    var playerBarContainer = document.getElementById("playerBarContainer");
    var playerBarImage = document.getElementById("playerBarImage");



    /* STOP AUDIO */

    const stopAllAudio = () => {

        var audio = document.getElementsByTagName('audio');

        for (i = 0; i < audio.length; i++) audio[i].pause();
        for (i = 0; i < audio.length; i++) audio[i].currentTime = 0;


    };



    /* END OF STOP AUDIO */

    playerBarContainer.onclick = () =>{
        playerPage.style.transform = "translate(0%)";
    }





    /* TIWA SAVAGE*/

    const songOne = () => {

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


    }


    cardOne.onclick = () => {
        
        for(var i = 0; i < aristNamePlayer.length; i++) {
            aristNamePlayer[i].innerHTML = "Tiwa Savage";
        }

        for(var i = 0; i < songTitlePlayer.length; i++) {
            songTitlePlayer[i].innerHTML = "Attention";
        }


        playButton.style.display = "none";
        pauseButton.style.display = "flex"; 

        playerPage.style.background = "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('tiwa.gif') center";

        

        setTimeout(() => {
            playerBarContainer.style.display = "flex";
            playerBarImage.src = "tiwa.gif";

        }, 500);

        songOne();

        playerPage.style.transform = "translateY(0%)";



        stopAllAudio();




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
            tiwasavage_attention.

                songTwo();

        }



    }

    /* END OF TIWA SAVAGE*/












    /* WIZKID */

    const songTwo = () => {

        const wizkid_blow = document.getElementById("wizkid_blow");

        aristNamePlayer.innerHTML = "Wizkid";
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




    }

    cardTwo.onclick = () => {

        for(var i = 0; i < aristNamePlayer.length; i++) {
            aristNamePlayer[i].innerHTML = "Wizkid";
        }

        for(var i = 0; i < songTitlePlayer.length; i++) {
            songTitlePlayer[i].innerHTML = "Blow";
        }

        playButton.style.display = "none";
        pauseButton.style.display = "flex";

        playerPage.style.background = "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('wizkid.gif') center";

        songTwo();

        playerPage.style.transform = "translateY(0%)";




        stopAllAudio();

        setTimeout(() => {
            playerBarContainer.style.display = "flex";
            playerBarImage.src = "wizkid.gif";

        }, 500);




        /* CHANGE SPEED */

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


        /* NEXT TRACK */




    }

    /*END OF WIZKID*/





    /* KRANIUM */

    const songThree = () => {

        const kranium_galpolicy = document.getElementById("kranium_galpolicy");

        aristNamePlayer.innerHTML = "Kranium";
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




    }

    cardThree.onclick = () => {

        for(var i = 0; i < aristNamePlayer.length; i++) {
            aristNamePlayer[i].innerHTML = "Kranium";
        }

        for(var i = 0; i < songTitlePlayer.length; i++) {
            songTitlePlayer[i].innerHTML = "Gal Policy";
        }

        playButton.style.display = "none";
        pauseButton.style.display = "flex";

        playerPage.style.background = "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('kranium.gif') center";

        songThree();

        playerPage.style.transform = "translateY(0%)";



        stopAllAudio();

        setTimeout(() => {
            playerBarContainer.style.display = "flex";
            playerBarImage.src = "kranium.gif";

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




    }

    /*END OF KRANIUM*/














































    /* SNOH */

    const songFour = () => {

        const snoh_dying = document.getElementById("snoh_dying");

        aristNamePlayer.innerHTML = "Snoh Aalegra";
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




    }

    cardFour.onclick = () => {

        for(var i = 0; i < aristNamePlayer.length; i++) {
            aristNamePlayer[i].innerHTML = "Snoh Aalegera";
        }

        for(var i = 0; i < songTitlePlayer.length; i++) {
            songTitlePlayer[i].innerHTML = "Dying 4 Your Love";
        }

        playButton.style.display = "none";
        pauseButton.style.display = "flex";

        playerPage.style.background = "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('snoh.gif') center";

        songFour();

        playerPage.style.transform = "translateY(0%)";

        stopAllAudio();


        setTimeout(() => {
            playerBarContainer.style.display = "flex";
            playerBarImage.src = "snoh.gif";

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


        playerPage.style.transform = "translateY(" + mousePosition + "px)"; //Player is positioned wherever mouse is




    
    


        }); 

    // END OF DRAG DOWN GESTURES  */




































}











