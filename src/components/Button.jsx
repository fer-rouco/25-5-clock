import './Button.scss';

export const Button = ({ id, children, onClick, disabled}) => {
  return (
    <button
      className='button'
      id={id}
      onClick={onClick}
      disabled={(disabled) ? true : false}
    >
      {children}
    </button>
  );
}
