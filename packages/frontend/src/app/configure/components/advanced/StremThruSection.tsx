import React from 'react';
import { Config } from '@aiostreams/types';
import { Section } from '../../../../components/Section';
import { CheckboxInput } from '../../../../components/CheckboxInput';
import { TextInput } from '../../../../components/TextInput';
import MultiSelect from '../../../../components/MutliSelect';

interface StremThruSectionProps {
  stremThruEnabled: boolean;
  setStremThruEnabled: (enabled: boolean) => void;
  stremThruUrl: string;
  setStremThruUrl: (url: string) => void;
  stremThruCredential: string;
  setStremThruCredential: (credential: string) => void;
  stremThruPublicIp: string;
  setStremThruPublicIp: (ip: string) => void;
  stremThruProxiedAddons: string[] | null;
  setStremThruProxiedAddons: (addons: string[] | null) => void;
  stremThruProxiedServices: string[] | null;
  setStremThruProxiedServices: (services: string[] | null) => void;
  mediaFlowEnabled: boolean; // To conditionally render based on MediaFlow
  addons: Config['addons']; // To get choosable addons for MultiSelect
}

export const StremThruSection: React.FC<StremThruSectionProps> = ({
  stremThruEnabled,
  setStremThruEnabled,
  stremThruUrl,
  setStremThruUrl,
  stremThruCredential,
  setStremThruCredential,
  stremThruPublicIp,
  setStremThruPublicIp,
  stremThruProxiedAddons,
  setStremThruProxiedAddons,
  stremThruProxiedServices,
  setStremThruProxiedServices,
  mediaFlowEnabled,
  addons,
}) => {
  const choosableAddons = addons?.map((addon) => addon.id) || [];

  const handleProxiedAddonsChange = (selectedIds: string[]) => {
    setStremThruProxiedAddons(selectedIds.length > 0 ? selectedIds : null);
  };

  const handleProxiedServicesChange = (selectedIds: string[]) => {
    setStremThruProxiedServices(selectedIds.length > 0 ? selectedIds : null);
  };

  return (
    <Section
      title="StremThru"
      description="Configure StremThru settings for advanced media routing."
    >
      <CheckboxInput
        label="Enable StremThru"
        checked={stremThruEnabled}
        onChange={setStremThruEnabled}
      />

      {stremThruEnabled && (
        <>
          <TextInput
            label="StremThru URL"
            value={stremThruUrl}
            onChange={setStremThruUrl}
            placeholder="e.g., http://localhost:3000"
          />
          <TextInput
            label="StremThru Credential"
            value={stremThruCredential}
            onChange={setStremThruCredential}
            type="password"
          />
          <TextInput
            label="StremThru Public IP"
            value={stremThruPublicIp}
            onChange={setStremThruPublicIp}
            placeholder="e.g., 192.168.1.1"
          />
          <MultiSelect
            options={choosableAddons.map((addon) => ({ label: addon, value: addon }))}
            values={stremThruProxiedAddons || []}
            setValues={handleProxiedAddonsChange}
          />
          <MultiSelect
            options={choosableAddons.map((addon) => ({ label: addon, value: addon }))}
            values={stremThruProxiedServices || []}
            setValues={handleProxiedServicesChange}
          />
        </>
      )}
    </Section>
  );
};