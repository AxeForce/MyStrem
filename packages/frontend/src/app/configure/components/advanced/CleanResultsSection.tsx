import React from 'react';
import { Section } from '../../../../components/Section';
import { CheckboxInput } from '../../../../components/CheckboxInput'; // Assuming a CheckboxInput component exists

interface CleanResultsSectionProps {
  cleanResults: boolean;
  setCleanResults: (clean: boolean) => void;
}

export const CleanResultsSection: React.FC<CleanResultsSectionProps> = ({
  cleanResults,
  setCleanResults,
}) => {
  return (
    <Section
      title="Clean Results"
      description="Enable to clean up results by removing unwanted entries."
    >
      <CheckboxInput
        label="Clean Results"
        checked={cleanResults}
        onChange={setCleanResults}
      />
    </Section>
  );
};