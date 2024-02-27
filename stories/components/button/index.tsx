interface ButtonProps {
  styles?: string;
  label: string;
  onClick?: () => void;
}

export const Button = ({styles, label, ...props}: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={
        styles + ' hover:scale-110 hover:transition-transform duration-[500ms] capitalize'
      }
      {...props}
    >
      <h5>{label}</h5>
    </button>
  );
};
