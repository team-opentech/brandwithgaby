interface ButtonProps {
  styles?: string;
  label: string;
  pulse?: boolean;
  onClick?: () => void;
}

export const Button = ({
  styles,
  label,
  pulse = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`relative p-2 rounded-full h-10 w-full border border-solid border-black z-10 lg:hover:scale-110 lg:hover:transition-transform lg:duration-[500ms] ${styles}`}
      {...props}
    >
      <h5>{label}</h5>
      <div className={pulse ? 'pulse' : 'hidden'} />
    </button>
    // <button
    //   onClick={props.onClick}
    //   className={
    //     styles +
    //     ' lg:hover:scale-110 hover:transition-transform duration-[500ms]'
    //   }
    //   {...props}
    // >
    //   <h5>{label}</h5>
    // </button>
  );
};
