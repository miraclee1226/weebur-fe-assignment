import { ReactNode } from "react";

interface ContentProps {
  children: ReactNode;
  className?: string;
}

export default function Content({
  children,
  className = "",
  ...props
}: ContentProps) {
  return (
    <p className={`${className}`} {...props}>
      {children}
    </p>
  );
}
