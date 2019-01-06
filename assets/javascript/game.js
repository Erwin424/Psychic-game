var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    
    i = 0
    var winTimes = i;
    document.getElementById("win").innerHTML =
    "Win: " + i;

    j = 0;
    var loseTimes = j;
    document.getElementById("lose").innerHTML =
    "Lose: " + j;

    k = 10 - usedTimes;
    var usedTimes = 0;
    var k = usedTimes;
    document.getElementById("left").innerHTML =
    "Guesses left: " + k;
    
        // This function is run whenever the user presses a key.
        document.onkeyup = function(event) {
    
          // Determines which key was pressed.
          var userGuess = event.key;
    
          // Randomly chooses a choice from the options array. This is the Computer's guess.
          var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
          // Reworked our code from last step to use "else if" instead of lots of if statements.
    
          // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
          if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {
    
            if ((userGuess === computerGuess)) {
              i++, k++;
            } else {
              j++, k++;
            }
    
            // Display the user and computer guesses, and wins/losses/ties.
            document.getElementById("win").innerHTML = "Win: " + i;
            document.getElementById("lose").innerHTML = "Lose: " + j;
            document.getElementById("left").innerHTML = "Guesses left: " + k;
            document.getElementById("record").innerHTML = "Your guesses so far: " + userGuess;
          }
        };