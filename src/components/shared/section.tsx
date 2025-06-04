"use client";

import { useScrollFadeIn } from '@/hooks/use-scroll-fade-in';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
}

export function Section({ title, subtitle, children, className, titleClassName, contentClassName, ...props }: SectionProps) {
  const { ref, isVisible } = useScrollFadeIn<HTMLElement>();

  return (
    <section
      ref={ref}
      className={cn(
        'py-12 md:py-20 scroll-fade-in',
        isVisible && 'is-visible',
        className
      )}
      {...props}
    >
      <div className="container mx-auto px-4">
        {title && (
          <h2 className={cn("text-3xl md:text-4xl font-bold text-primary mb-4 text-center font-headline", titleClassName)}>
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-lg text-muted-foreground mb-8 md:mb-12 text-center max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className={cn(contentClassName)}>
          {children}
        </div>
      </div>
    </section>
  );
}
