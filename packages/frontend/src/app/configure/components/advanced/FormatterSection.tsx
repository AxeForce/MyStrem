import React from 'react';
import { Section } from '../../../../components/Section';
import { SelectInput } from '../../../../components/SelectInput'; // Assuming a SelectInput component exists

interface FormatterSectionProps {
  formatterOptions: string[];
  formatter: string | undefined;
  setFormatter: (formatter: string) => void;
}

export const FormatterSection: React.FC<FormatterSectionProps> = ({
  formatterOptions,
  formatter,
  setFormatter,
}) => {
  return (
    <Section
      title="Formatter"
      description="Choose a formatter for displaying results."
    >
      <SelectInput
        label="Formatter"
        options={formatterOptions.map((option) => ({ label: option, value: option }))}
        value={formatter || ''}
        onChange={setFormatter}
        placeholder="Select a formatter..."
      />
    </Section>
  );
};