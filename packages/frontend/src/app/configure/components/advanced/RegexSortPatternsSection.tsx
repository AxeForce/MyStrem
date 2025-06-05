import React from 'react';
import { Section } from '../../../../components/Section';
import { TextInput } from '../../../../components/TextInput';

interface RegexSortPatternsSectionProps {
  regexSortPatterns: string;
  setRegexSortPatterns: (patterns: string) => void;
}

export const RegexSortPatternsSection: React.FC<RegexSortPatternsSectionProps> = ({
  regexSortPatterns,
  setRegexSortPatterns,
}) => {
  return (
    <Section
      title="Regex Sort Patterns"
      description="Define regex patterns to sort results. Separate multiple patterns with a comma."
    >
      <TextInput
        label="Sort Patterns"
        value={regexSortPatterns}
        onChange={setRegexSortPatterns}
        placeholder="e.g., 4k,1080p,720p"
      />
    </Section>
  );
};