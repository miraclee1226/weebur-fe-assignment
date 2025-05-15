import { ReactNode } from "react";

interface ItemProps {
  children: ReactNode;
  className?: string;
}

const Item = ({ children, className = "", ...props }: ItemProps) => {
  return (
    <div className={`${className}`} {...props}>
      {children}
    </div>
  );
};

export default Item;
