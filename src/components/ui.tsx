import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'soft' | 'ghost';

const base =
  'inline-flex items-center justify-center gap-2 rounded-pill font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grape-600';

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-grape-600 to-bubble-500 text-white shadow-soft hover:shadow-lift hover:-translate-y-0.5',
  soft: 'bg-grape-100 text-grape-600 hover:bg-grape-300/60 hover:-translate-y-0.5',
  ghost: 'border border-line bg-surface text-ink hover:border-grape-300 hover:bg-grape-50',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
} as const;

interface CommonProps {
  variant?: Variant;
  size?: keyof typeof sizes;
  children: ReactNode;
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant = 'primary', size = 'md', children, className = '', ...rest }: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

type LinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...rest
}: LinkProps) {
  return (
    <a className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
    </a>
  );
}

interface PillProps {
  children: ReactNode;
  active?: boolean;
  className?: string;
}

export function Pill({ children, active = false, className = '' }: PillProps) {
  const tone = active
    ? 'bg-grape-600 text-white border-grape-600 shadow-soft'
    : 'bg-surface text-ink-soft border-line hover:border-grape-300 hover:bg-grape-50';
  return (
    <span
      className={`inline-flex items-center rounded-pill border px-4 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 ${tone} ${className}`}
    >
      {children}
    </span>
  );
}

interface CategoryTagProps {
  children: ReactNode;
}

export function CategoryTag({ children }: CategoryTagProps) {
  return (
    <span className="inline-flex items-center rounded-pill bg-bubble-50 px-3 py-1 text-[0.7rem] font-semibold tracking-wide text-bubble-600">
      {children}
    </span>
  );
}
