import './Button.css';

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick,
  disabled = false,
  type = 'button'
}) {
  const buttonClass = `btn btn-${variant}`;
  
  return (
    <button 
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}
