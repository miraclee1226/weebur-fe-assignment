import { ReactNode } from "react";

interface ContentProps {
  children: ReactNode;
  className?: string;
}

const Content = ({ children, className = "", ...props }: ContentProps) => {
  return (
    <p className={`${className}`} {...props}>
      {children}
    </p>
  );
};

export default Content;
