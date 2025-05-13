import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Item = ({ children, className = "", ...props }: Props) => {
  return (
    <div className={`${className}`} {...props}>
      {children}
    </div>
  );
};

export default Item;
