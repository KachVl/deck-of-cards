import './card.css';
import { useMediaQuery } from 'react-responsive';

export const Card = ({ card }) => {
    const { suit, rank, picked } = card;
    const isWideScreen = useMediaQuery({
      query: '(min-width: 1800px)'
    })
    const is1200px = useMediaQuery({
      query: '(min-width: 1200px)'
    })

    const translateStep = isWideScreen 
      ? 200 
      : is1200px
        ? 150
        : 125;

  return (
    <div 
      className={`card card--${suit}`}
      style={picked 
        ? { transform: `translateX(${picked * translateStep}px)` }
        : {}
      }
    >

      <div className='card__value'>
        <div className='card__rank'>
          {isNaN(rank) ? rank[0] : rank}
        </div>
        <div className={`card__${suit}`}></div>
      </div>

      <div className={`card__center card__center--${suit}`}></div>
    
      <div className='card__value bottom'>
        <div className='card__rank'>
          {isNaN(rank) ? rank[0] : rank}
        </div>
        <div className={`card__${suit}`}></div>
      </div>
    </div>
  )
}
