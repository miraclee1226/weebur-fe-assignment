import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  className?: string;
}

const Title = ({ children, className = "", ...props }: TitleProps) => {
  return (
    <h4 className={`${className}`} {...props}>
      {children}
    </h4>
  );
};

export default Title;
