import './Button.css';

const Button = (params) => {
  return (
    <button onClick={params.onClick} className={`btn ${params?.className}`}>
      {params.name}
      {params.children}
    </button>
  );
};

export default Button;
