import type { ReactNode } from 'react';

interface SectionLabelProps {
  children: ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="text-xs uppercase tracking-[0.18em] text-muted">{children}</p>
  );
}

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
}

export function SectionHeading({ children, className = '' }: SectionHeadingProps) {
  return (
    <h2 className={`mt-4 font-display text-4xl tracking-tight md:text-5xl ${className}`}>
      {children}
    </h2>
  );
}
