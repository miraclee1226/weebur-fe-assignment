import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  className?: string;
}

export default function Title({
  children,
  className = "",
  ...props
}: TitleProps) {
  return (
    <h4 className={`${className}`} {...props}>
      {children}
    </h4>
  );
}
