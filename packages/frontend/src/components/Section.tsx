import React from 'react';

interface SectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, description, children }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      <div>{children}</div>
    </div>
  );
};