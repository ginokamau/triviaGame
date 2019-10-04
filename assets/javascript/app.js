// TIMER=================================================
// // Step 1:
// // Use the following Audio file below:
// var audio = new Audio("raven.mp3");

// //  Step 2:
// //  after 5 seconds, execute the fiveSeconds function
// //  after 10 seconds, execute the tenSeconds function
// //  after 15 seconds, execute the timeUp function

// setTimeout(fiveSeconds, 1000 * 5);
// setTimeout(tenSeconds, 1000 * 10);
// setTimeout(timeUp, 1000 * 15);

// //  Step 3:
// //  Fill in the blanks to these functions.
// function fiveSeconds() {
//   // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
//   // console log 10 seconds left
//   $("#time-left").append("<h2>About 10 Seconds Left!</h2>");
//   console.log("10 seconds left");
// }

// function tenSeconds() {
//   // in the element with an id of time-left add an h2 saying About 5 Seconds Left!
//   // console log 5 seconds left
//   $("#time-left").append("<h2>About 5 Seconds Left!</h2>");
//   console.log("5 seconds left");
// }

// function timeUp() {
//   // in the element with an id of time-left add an h2 saying Time's Up!
//   // console log done
//   console.log("done");
//   $("#time-left").append("<h2>Time's Up!</h2>");
//   console.log("time is up");

//   //  The following line will play the audio file we linked to above:
//   audio.play();
// }
// ======================================================
// INTERVAL==============================================
    //  Interval Demonstration
    //  Set our number counter to 100.
    var number = 60;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  When the stop button gets clicked, run the stop function.
    $("#stop").on("click", stop);

    // //  When the resume button gets clicked, execute the run function.
    $("#start").on("click", run);

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    //  *****BUG FIX******** 
    //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#show-number").html("<h3>" +"Time Remaining:  "+ number + "</h3>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }

    // =================================================
    // RANDOM SONG TO CONSOLE===========================
    var purpleRain=["Let's Go Crazy","Take Me with U","The Beautiful Ones","Computer Blue","Darling Nikki","Baby I'm a Star"];
    var underTheCherryMoon=["Girls & Boys","Mountains","Kiss","Anotherloverholenyohead","Sometimes It Snows in April"];
    var batman=["The Future","Partyman","Scandalous",];
    var graffitiBridge=["New Power Generation, Part 1","Release It","Round and Round","Thieves in the Temple"];
    
    var princeSoundtrack=purpleRain.concat(underTheCherryMoon,batman,graffitiBridge);

    // for (var i = 0; i < princeSoundtrack.length; i++) {
    //     // get the size of the inner array
    //     var innerArrayLength = princeSoundtrack[i].length;
    //     // loop the inner array
    //     for (var j = 0; j < innerArrayLength; j++) {
    //         // console.log(princeSoundtrack[i][j]);
    //     }
    // }
    
    var randomItem = princeSoundtrack[Math.floor(Math.random()*princeSoundtrack.length)];
    
    console.log(randomItem);
    // =================================================
    // =================================================
    // PROVIDE SONG TO MATCH MOVIE======================

    //  Show the movie in the #soundtrackSong tag.
    $("#soundtrackSong").html("<h3>" +"Which movie is "+ randomItem +" from?"+ "</h3>");
    //==================================================      
    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    //  Execute the run function.
    run();
    // =================================================



