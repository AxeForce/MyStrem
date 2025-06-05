import React from 'react';
import { Config } from '@aiostreams/types';
import MultiSelect from '../../../../components/MutliSelect';
import { Section } from '../../../../components/Section';

interface AddonsSectionProps {
  choosableAddons: string[];
  addons: Config['addons'];
  setAddons: (addons: Config['addons']) => void;
}

export const AddonsSection: React.FC<AddonsSectionProps> = ({
  choosableAddons,
  addons,
  setAddons,
}) => {
  const selectedAddonIds = addons?.map((addon) => addon.id) || [];

  const handleSetAddons = (selectedIds: string[]) => {
    const newAddons = selectedIds.map((id) => {
      const existingAddon = addons?.find((addon) => addon.id === id);
      return existingAddon || { id, options: {} };
    });
    setAddons(newAddons);
  };

  return (
    <Section title="Addons" description="Configure which addons to use.">
      <MultiSelect
        options={choosableAddons.map((addon) => ({ label: addon, value: addon }))}
        values={selectedAddonIds}
        setValues={handleSetAddons}
      />
    </Section>
  );
};