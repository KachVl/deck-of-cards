import './button.css';

export const Button = ({ onClick, text }) => {
  return (
    <div className='btn' onClick={onClick}>
      {text}
    </div>
  );
};
