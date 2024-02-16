interface ButtonProps {
  styles?: string;
  label: string;
  onClick?: () => void;
}

export const Button = ({styles, label, ...props}: ButtonProps) => {
  return (
    <button className={styles} {...props}>
      {label}
    </button>
  );
};
