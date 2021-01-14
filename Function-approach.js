// Creating a deck of 52 cards
function makeDeck() {
    const deck = [];
    const suits = ["hearts","diamonds","spades","clubs"];
    const values = "2,3,4,5,6,7,8,9,10,J,Q,K,A";

    for(let value of values.split(',')) {
        for(let suit of suits) {
            deck.push({
                value,
                suit
            })
        }
    }
    return deck;
    }
    // Draw 1 card from deck function
    function drawCard (deck,drawnCards) {
        const card = deck.pop();
        drawnCards.push(card);
       return card;
    }
    // Draw multiple cards function
    function drawMultiple(numCards,deck,drawnCards) {
        const cards = [];
        for (let i =0; i<numCards;i++){
            cards.push(drawnCards(deck,drawnCards)); 
        }
        return cards;
    } 

    // Shuffle function 
    function shuffle(deck) {
       
        //loop over deckay backwards
        for(let i= deck.length-1; i>0; i--) {
        //pick random index before current element
         let j = Math.floor(Math.random() * (i + 1));
         //swap elements in place
         [deck[i],deck[j]] = [deck[j],deck[i]];
        }
    }
    

    const firstDeck = makeDeck();
    const drawnCards = [];
    shuffle(firstDeck);
    const hand1 = drawMultiple(5,firstDeck,drawnCards);
    const hand2 = drawMultiple(5, firstDeck,drawnCards);