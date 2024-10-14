import './deck.css';
import { Card } from '../card/card';

export const Deck = ({ deck }) => {
  return (
    <div className='deck'>
      {deck.length && <div className='cardBack'></div>}
      {deck.map(card => <Card card={card} key={card.suit + card.rank}/>)}
    </div>
  );
}