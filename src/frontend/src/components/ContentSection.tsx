import { ReactNode } from 'react';

interface ContentSectionProps {
  children: ReactNode;
  className?: string;
}

export default function ContentSection({ children, className = '' }: ContentSectionProps) {
  return (
    <section className={`prose prose-slate dark:prose-invert max-w-none ${className}`}>
      {children}
    </section>
  );
}
