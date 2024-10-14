import './field.css';
import { Deck } from '../deck/deck';
import { useState } from 'react';
import { Button } from '../button/button';

export const Field = ({deck, setDeck }) => {
  const [pickedNums, setPickedNums] = useState([]);
  const [isReadyToPick, setIsReadyToPick] = useState(true);

  function unpickCards() {
    setDeck(() => {
      const newDeck = [...deck];

      for (const num of pickedNums) {
        newDeck[num] = { ...newDeck[num], picked: 0 };
      }

      return newDeck;
    })

    setPickedNums([]);
  }

  function pickCards() {
    const numbers = [];

    while (numbers.length < 5) {
      let random = Math.floor(Math.random() * deck.length);

      if (random === deck.length) {
        random = deck.length - 1;
      }

      if (!numbers.includes(random)) {
        numbers.push(random);
      }
    }

    setPickedNums(numbers);

    for (let i = 0; i < 5; i++) {
      setDeck(curr => curr.map((card, index) => {
        if (numbers[i] !== index) {
          return card;
        } else {
          return { ...card, picked: i + 1 };
        }
    }))
    }
  }

  function handlePickRandom() {
    if (!isReadyToPick) {
      return;
    }

    if (!pickedNums.length) {
      setIsReadyToPick(false);
      pickCards();
      setTimeout(() => setIsReadyToPick(true), 400);

      return;
    }

    setIsReadyToPick(false);
    unpickCards();
    setTimeout(() => pickCards(), 400);
    setTimeout(() => setIsReadyToPick(true), 400);
  }

  return (
    <div className='field'>
      <Deck deck={deck} />

      <Button onClick={handlePickRandom} text={'Pick 5 random cards'}/>
    </div>
  )
}