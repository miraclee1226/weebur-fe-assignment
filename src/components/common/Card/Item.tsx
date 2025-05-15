import { ReactNode } from "react";

interface ItemProps {
  children: ReactNode;
  className?: string;
}

export default function Item({
  children,
  className = "",
  ...props
}: ItemProps) {
  return (
    <div className={`${className}`} {...props}>
      {children}
    </div>
  );
}
