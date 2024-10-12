import './deck.css';
import { Card } from '../card/card';

export const Deck = ({ deck }) => {
  return (
    <div className='deck'>
      {deck.map(card => <Card card={card} key={card.suit + card.rank}/>)}

      <div className='cardBack'></div>
    </div>
  );
}