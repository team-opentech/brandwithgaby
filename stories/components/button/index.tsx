interface ButtonProps {
  styles?: string;
  label: string;
  onClick?: () => void;
}

export const Button = ({styles, label, ...props}: ButtonProps) => {
  return (
    <button onClick={props.onClick} className={styles} {...props}>
      {label}
    </button>
  );
};
