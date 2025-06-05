import React from 'react';
import { Section } from '../../../../components/Section';
import { TextInput } from '../../../../components/TextInput'; // Assuming a TextInput component exists

interface RegexFiltersSectionProps {
  regexFilters: { excludePattern?: string; includePattern?: string };
  setRegexFilters: (filters: { excludePattern?: string; includePattern?: string }) => void;
}

export const RegexFiltersSection: React.FC<RegexFiltersSectionProps> = ({
  regexFilters,
  setRegexFilters,
}) => {
  const handleExcludeChange = (value: string) => {
    setRegexFilters({ ...regexFilters, excludePattern: value });
  };

  const handleIncludeChange = (value: string) => {
    setRegexFilters({ ...regexFilters, includePattern: value });
  };

  return (
    <Section
      title="Regex Filters"
      description="Apply regex filters to include or exclude results."
    >
      <TextInput
        label="Exclude Pattern"
        value={regexFilters.excludePattern || ''}
        onChange={handleExcludeChange}
        placeholder="e.g., .*badword.*"
      />
      <TextInput
        label="Include Pattern"
        value={regexFilters.includePattern || ''}
        onChange={handleIncludeChange}
        placeholder="e.g., .*goodword.*"
      />
    </Section>
  );
};