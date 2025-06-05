import React from 'react';
import { Section } from '../../../../components/Section';
import { TextInput } from '../../../../components/TextInput';

interface LimitResultsSectionProps {
  maxResultsPerResolution: number | null;
  setMaxResultsPerResolution: (count: number | null) => void;
}

export const LimitResultsSection: React.FC<LimitResultsSectionProps> = ({
  maxResultsPerResolution,
  setMaxResultsPerResolution,
}) => {
  const handleChange = (value: string) => {
    const numValue = parseInt(value, 10);
    setMaxResultsPerResolution(isNaN(numValue) ? null : numValue);
  };

  return (
    <Section
      title="Limit Results"
      description="Set the maximum number of results per resolution."
    >
      <TextInput
        label="Max Results Per Resolution"
        value={maxResultsPerResolution?.toString() || ''}
        onChange={handleChange}
        placeholder="e.g., 5"
        type="number"
      />
    </Section>
  );
};