import React from 'react';
import { Config } from '@aiostreams/types';
import { Section } from '../../../../components/Section';
import { CheckboxInput } from '../../../../components/CheckboxInput';
import { TextInput } from '../../../../components/TextInput';
import MultiSelect from '../../../../components/MutliSelect';

interface MediaFlowSectionProps {
  mediaFlowEnabled: boolean;
  setMediaFlowEnabled: (enabled: boolean) => void;
  mediaFlowProxyUrl: string;
  setMediaFlowProxyUrl: (url: string) => void;
  mediaFlowApiPassword: string;
  setMediaFlowApiPassword: (password: string) => void;
  mediaFlowPublicIp: string;
  setMediaFlowPublicIp: (ip: string) => void;
  mediaFlowProxiedAddons: string[] | null;
  setMediaFlowProxiedAddons: (addons: string[] | null) => void;
  mediaFlowProxiedServices: string[] | null;
  setMediaFlowProxiedServices: (services: string[] | null) => void;
  stremThruEnabled: boolean; // To conditionally render based on StremThru
  addons: Config['addons']; // To get choosable addons for MultiSelect
}

export const MediaFlowSection: React.FC<MediaFlowSectionProps> = ({
  mediaFlowEnabled,
  setMediaFlowEnabled,
  mediaFlowProxyUrl,
  setMediaFlowProxyUrl,
  mediaFlowApiPassword,
  setMediaFlowApiPassword,
  mediaFlowPublicIp,
  setMediaFlowPublicIp,
  mediaFlowProxiedAddons,
  setMediaFlowProxiedAddons,
  mediaFlowProxiedServices,
  setMediaFlowProxiedServices,
  stremThruEnabled,
  addons,
}) => {
  const choosableAddons = addons?.map((addon) => addon.id) || [];

  const handleProxiedAddonsChange = (selectedIds: string[]) => {
    setMediaFlowProxiedAddons(selectedIds.length > 0 ? selectedIds : null);
  };

  const handleProxiedServicesChange = (selectedIds: string[]) => {
    setMediaFlowProxiedServices(selectedIds.length > 0 ? selectedIds : null);
  };

  return (
    <Section
      title="MediaFlow"
      description="Configure MediaFlow settings for advanced media routing."
    >
      <CheckboxInput
        label="Enable MediaFlow"
        checked={mediaFlowEnabled}
        onChange={setMediaFlowEnabled}
      />

      {mediaFlowEnabled && (
        <>
          <TextInput
            label="MediaFlow Proxy URL"
            value={mediaFlowProxyUrl}
            onChange={setMediaFlowProxyUrl}
            placeholder="e.g., http://localhost:3000"
          />
          <TextInput
            label="MediaFlow API Password"
            value={mediaFlowApiPassword}
            onChange={setMediaFlowApiPassword}
            type="password"
          />
          <TextInput
            label="MediaFlow Public IP"
            value={mediaFlowPublicIp}
            onChange={setMediaFlowPublicIp}
            placeholder="e.g., 192.168.1.1"
          />
          <MultiSelect
            options={choosableAddons.map((addon) => ({ label: addon, value: addon }))}
            values={mediaFlowProxiedAddons || []}
            setValues={handleProxiedAddonsChange}
          />
          <MultiSelect
            options={choosableAddons.map((addon) => ({ label: addon, value: addon }))}
            values={mediaFlowProxiedServices || []}
            setValues={handleProxiedServicesChange}
          />
        </>
      )}
    </Section>
  );
};