window.addEventListener('DOMContentLoaded', function() {
  // Execute after page load
let dealer = document.getElementById('dealer-hand')
let player = document.getElementById('player-hand')
let deal = document.getElementById('deal-button')


  const suits = [ "clubs", 'diamonds', 'hearts', 'spades'] 
  const values = [ 'ace', 2,3,4,5,6,7,8,9,10,'jack','queen','king']

  class Card {
    constructor(points, suit){
      this.points= points;
      this.suit = suit;
      this.imageUrl= '<img src= "images/' + points + '_of_' + suit + '.png">'
    }
    
  }

let deck = []
  function buildDeck() {
    for (let i = 0; i < suits.length; i++) {
      for (let x = 0; x < values.length; x++) {
        deck.push(new Card (values[x], suits [i]))
      }
    }
  }
  buildDeck()
  console.log(deck)
  deal.addEventListener('click', (e) => {
    e.preventDefault()
    dealer.innerHTML = '<img src= "images/' + 2 + '_of_' + 'clubs' + '.png">'
  })

//   })
//   document.getElementById('hit-button').addEventListener('click', function(){
//     if(playerHand.length === 0){
//       return
//     }
//   })

//   document.getElementById('stand-button').addEventListener('click', function() {
//     console.log('Stand was hit')
//   })





})
