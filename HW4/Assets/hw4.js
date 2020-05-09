
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
      return questions
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
        localStorage.setItem("results");

    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    var restart = ""
    gameOverHTML += "<h2 id='score'> Your scores:" + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    // var playagain ="Play Again?"
    element.innerHTML = gameOverHTML;
};
 
// create questions here
var questions = [
    new Question("Who won 1992 NBA Championship?", ["Pistons", "Lakers","Bulls", "Trailblazers"], "Bulls"),
    new Question("Is Who Known as The BLack Mamba?", ["Lebron James", "James Harden", "Chris Paul", "Kobe Bryant"], "Kobe Bryant"),
    new Question("What Team did Charles Barkley never play on?", ["76ers", "Jazz","Rockets", "Suns"], "Jazz"),
    new Question("What team was Larry Bird a coach for?",["Celtics", "Bucks", "Pacers", "Never Coach"], "Pacers"),
    new Question("What team holds the most NBA Championships?", ["Spurs", "Bulls", "Lakers", "Celtics"], "Celtics")


];


// create quiz
var quiz = new Quiz(questions);
 
// Show results

function answer(question) {
    if (questions == 10) {
        if (question == 1) {
            score++; 
            questions--;
            start();
        }

        else if (question == 2) {
            score = score;
            questions--;
            start();
        }

        else if (question == 3) {
            score = score;
            questions--;
            start();
        }
    }

    else if (questions == 9) {
        if (question == 1) {
            score = score;
            questions--;
            start();
        }

        else if (question == 2) {
            score = score;
            questions--;
            start();
        }

        else if (question == 3) {
            score++;
            questions--;
            start();
        }
    }

    else if (questions == 8) {
        if (question == 1) {
            score = score;
            questions--;
            start();
        }

        else if (question == 2) {
            score++;
            questions--;
            start();
        }

        else if (question == 3) {
            score = score;
            questions--;
            start();
        }
    }

    else if (questions == 7) {
        if (question == 1) {
            score++;
            questions--;
            start();
        }

        else if (question == 2) {
            score = score;
            questions--;
            start();
        }

        else if (question == 3) {
            score = score;
            questions--;
            start();
        }
    }

    else if (questions == 6) {
        if (question == 1) {
            score++;
            questions--;
            start();
        }

        else if (question == 2) {
            score = score;
            questions--;
            start();
        }

        else if (question == 3) {
            score = score;
            questions--;
            start();
        }
    }

    else if (questions == 5) {
        if (question == 1) {
            score = score;
            questions--;
            start();
        }

        else if (question == 2) {
            score++;
            questions--;
            start();
        }

        else if (question == 3) {
            score = score;
            questions--;
            start();
        }
    }

    else if (questions == 4) {
        if (question == 1) {
            score = score;
            questions--;
            start();
        }

        else if (question == 2) {
            score++;
            questions--;
            start();
        }

        else if (question == 3) {
            score = score;
            questions--;
            start();
        }
    }

    else if (questions == 3) {
        if (question == 1) {
            score = score;
            questions--;
            start();
        }

        else if (question == 2) {
            score = score;
            questions--;
            start();
        }

        else if (question == 3) {
            score++;
            questions--;
            start();
        }
    }

    else if (questions == 2) {
        if (question == 1) {
            score = score;
            questions--;
            start();
        }

        else if (question == 2) {
            score = score;
            questions--;
            start();
        }

        else if (question == 3) {
            score++;
            questions--;
            start();
        }
    }

    else if (questions == 1) {
        if (question == 1) {
            score++;
            questions--;
            start();
        }

        else if (question == 2) {
            score = score;
            questions--;
            start();
        }

        else if (question == 3) {
            score = score;
            questions--;
            start();
        }
    }
}
populate();