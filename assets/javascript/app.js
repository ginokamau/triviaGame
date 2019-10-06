var card = $("#quiz-area");

// Question


//This is an array of 5 objects 
var questions = [
  {
    question: "What was Prince's first name?",
    answers: ["Roger", "Prince", "Gino", "Taylor"],
    correctAnswer: "Prince"
  },
  {
    question: "What was Prince's most famous album?",
    answers: ["Around the World in a Day", "Girl Scout Cookies", "Purple Rain", "1999"],
    correctAnswer: "Purple Rain"
  },
  {
    question: "What was Prince's final artist name?",
    answers: ["Supafly Lover", "Artist formerly known as Prince", "Scandalous", "Detroit Louie"],
    correctAnswer: "Artist formerly known as Prince"
  },
  {
    question: "Where did Prince live?",
    answers: ["Paisley Park", "Graffiti Bridge", "Under the Cherry Moon", "Jerry's World"],
    correctAnswer: "Paisley Park"
  },
  {
    question: "What is a 'fowl' inspired Prince song?",
    answers: ["Jungle Love", "the Funky Chicken", "When Doves Cry", "The Bird"],
    correctAnswer: "When Doves Cry"
  },
  {
    question: "What sport did Prince play in high school?",
    answers: ["Soccer", "Tennis", "Fencing", "Basketball"],
    correctAnswer: "Basketball"
  },
  {
    question: "What was Prince's choice footwear?",
    answers: ["Reeboks, prolly cross trainers", "High heels, hey not judging", "Air Jordans, heard he liked to hoop", "Doc Martens, who wouldn't"],
    correctAnswer: "High heel, hey not judging"
  },
  {
    question: "What song did Prince dedicate to his wife?",
    answers: ["The Most Beautiful Girl in the World", "Darling Nikki", "Insatiable", "Rasberry Beret"],
    correctAnswer: "The Most Beautiful Girl in the World"
  },
  {
    question: "Which Prince movie was a loose depiction of his real life?",
    answers: ["Batman", "Graffiti Bridge", "Under the Cherry Moon", "Purple Rain"],
    correctAnswer: "Purple Rain"
  },
  {
    question: "Which of the following females were never accused of being romantically involved with Prince?",
    answers: ["Vanity", "Beyonce", "Kim Bassinger", "Sheena Easton"],
    correctAnswer: "Beyonce"
  },
];

// Variable that will hold the setInterval
var timer;

var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      alert("Time is up Sucker")
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend(
      "<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>"
    );

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    card.append("<button id='done'>Done</button>");
  },

  done: function() {
    var inputs = card.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === questions[i].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    }
    this.result();
  },

  result: function() {
    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    card.html("<h2>All Done!</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});

$(document).on("click", "#done", function() {
  game.done();
});
