import React from 'react';

interface TechBadgeProps {
  label: string;
  variant?: 'default' | 'accent' | 'outline';
  className?: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  label,
  variant = 'default',
  className = ''
}) => {
  return (
    <span className={`tech-tag tech-tag-${variant} ${className}`}>
      {label}
    </span>
  );
};

export default TechBadge;
