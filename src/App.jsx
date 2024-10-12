import './App.css';
import { useState } from 'react';
import { Field } from './field/field';

const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];

function createDeck(suits, ranks) {
  const deck = [];

  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push({ suit: suit, rank: rank, picked: 0 })
    }
  }

  return deck;
}

function App() {
  const [deck, setDeck] = useState(createDeck(suits, ranks));

  return (
    <div className='App'>
      <h1 className='title'>Cards Deck</h1>

      <Field deck={deck} setDeck={setDeck} />
    </div>
  );
}

export default App;
