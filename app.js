/*
LOGIC
*/

var score = 0;
var playerChoice;

var readable = {
  '0':'Rock',
  '1':'Paper',
  '2':'Scissors',
}

var computerChoice = {
  init: function() {
    this.store=Math.floor(Math.random() *3);
    this.text = readable[this.store];
  },
  store: '' ,
  text: '' ,
}

// computerChoice.init();
// console.log('computerChoice:', computerChoice.store, computerChoice.text);

// var computerChoice = Math.floor(Math.random() *3);
// console.log('computerCHoice:', computerChoice)

//LOOPS - check a condition and keep running if allowed

// SO WHO WINS?

var choice=[0,1,2,0];

var whoWins = function(player, computer) {
  if (choice[player] === choice[computer]) {
    return " It's a tie! Try again?";
  }
  if (choice[player]===choice[computer+1]) {
    score++;
    return " You won! Play again?";
  } else {
    score--;
    return " You lost :(! Try again?";
  }
}



//UI

var paragraph = document.querySelector('p');
var assignClick = function(tag, pos) {
  //assign a click listener
  tag.addEventListener('click', function() {
    //set the player's choice
    playerChoice = pos;
    //give feedback
    computerChoice.init();
    paragraph.innerText= 'The Computer chose ' + computerChoice.text +'. '
    //determine a winner
    //display the winner and the current score
    paragraph.innerText += whoWins(playerChoice, computerChoice.store);
    paragraph.innerText += '\n' + 'SCORE: ' + score;
  })


}
var images={
  tags: document.getElementsByTagName('img'),
  init: function() {
    for( var step=0; step < this.tags.length; step++) {
      assignClick(this.tags[step], step);
    }
  }
}

images.init();
