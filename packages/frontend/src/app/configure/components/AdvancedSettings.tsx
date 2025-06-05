import React from 'react';
import { Config } from '@aiostreams/types';
import { AddonsSection } from './advanced/AddonsSection';
import { RegexFiltersSection } from './advanced/RegexFiltersSection';
import { RegexSortPatternsSection } from './advanced/RegexSortPatternsSection';
import { SizeFilterSection } from './advanced/SizeFilterSection';
import { LimitResultsSection } from './advanced/LimitResultsSection';
import { FormatterSection } from './advanced/FormatterSection';
import { CleanResultsSection } from './advanced/CleanResultsSection';
import { MediaFlowSection } from './advanced/MediaFlowSection';
import { StremThruSection } from './advanced/StremThruSection';


interface AdvancedSettingsProps {
  choosableAddons: string[];
  addons: Config['addons'];
  setAddons: (addons: Config['addons']) => void;
  regexFilters: { excludePattern?: string; includePattern?: string };
  setRegexFilters: (filters: { excludePattern?: string; includePattern?: string }) => void;
  regexSortPatterns: string;
  setRegexSortPatterns: (patterns: string) => void;
  maxMovieSizeSlider: number;
  minMovieSize: number | null;
  setMinMovieSize: (size: number | null) => void;
  maxMovieSize: number | null;
  setMaxMovieSize: (size: number | null) => void;
  maxEpisodeSizeSlider: number;
  minEpisodeSize: number | null;
  setMinEpisodeSize: (size: number | null) => void;
  maxEpisodeSize: number | null;
  setMaxEpisodeSize: (size: number | null) => void;
  maxResultsPerResolution: number | null;
  setMaxResultsPerResolution: (count: number | null) => void;
  formatterOptions: string[];
  formatter: string | undefined;
  setFormatter: (formatter: string) => void;
  cleanResults: boolean;
  setCleanResults: (clean: boolean) => void;
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
}

export const AdvancedSettings: React.FC<AdvancedSettingsProps> = ({
  choosableAddons,
  addons,
  setAddons,
  regexFilters,
  setRegexFilters,
  regexSortPatterns,
  setRegexSortPatterns,
  maxMovieSizeSlider,
  minMovieSize,
  setMinMovieSize,
  maxMovieSize,
  setMaxMovieSize,
  maxEpisodeSizeSlider,
  minEpisodeSize,
  setMinEpisodeSize,
  maxEpisodeSize,
  setMaxEpisodeSize,
  maxResultsPerResolution,
  setMaxResultsPerResolution,
  formatterOptions,
  formatter,
  setFormatter,
  cleanResults,
  setCleanResults,
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
}) => {
  return (
    <>
      <AddonsSection
        choosableAddons={choosableAddons}
        addons={addons}
        setAddons={setAddons}
      />
      <RegexFiltersSection
        regexFilters={regexFilters}
        setRegexFilters={setRegexFilters}
      />
      <RegexSortPatternsSection
        regexSortPatterns={regexSortPatterns}
        setRegexSortPatterns={setRegexSortPatterns}
      />
      <SizeFilterSection
        maxMovieSizeSlider={maxMovieSizeSlider}
        minMovieSize={minMovieSize}
        setMinMovieSize={setMinMovieSize}
        maxMovieSize={maxMovieSize}
        setMaxMovieSize={setMaxMovieSize}
        maxEpisodeSizeSlider={maxEpisodeSizeSlider}
        minEpisodeSize={minEpisodeSize}
        setMinEpisodeSize={setMinEpisodeSize}
        maxEpisodeSize={maxEpisodeSize}
        setMaxEpisodeSize={setMaxEpisodeSize}
      />
      <LimitResultsSection
        maxResultsPerResolution={maxResultsPerResolution}
        setMaxResultsPerResolution={setMaxResultsPerResolution}
      />
      <FormatterSection
        formatterOptions={formatterOptions}
        formatter={formatter}
        setFormatter={setFormatter}
      />
      <CleanResultsSection
        cleanResults={cleanResults}
        setCleanResults={setCleanResults}
      />
      <MediaFlowSection
        mediaFlowEnabled={mediaFlowEnabled}
        setMediaFlowEnabled={setMediaFlowEnabled}
        mediaFlowProxyUrl={mediaFlowProxyUrl}
        setMediaFlowProxyUrl={setMediaFlowProxyUrl}
        mediaFlowApiPassword={mediaFlowApiPassword}
        setMediaFlowApiPassword={setMediaFlowApiPassword}
        mediaFlowPublicIp={mediaFlowPublicIp}
        setMediaFlowPublicIp={setMediaFlowPublicIp}
        mediaFlowProxiedAddons={mediaFlowProxiedAddons}
        setMediaFlowProxiedAddons={setMediaFlowProxiedAddons}
        mediaFlowProxiedServices={mediaFlowProxiedServices}
        setMediaFlowProxiedServices={setMediaFlowProxiedServices}
        stremThruEnabled={stremThruEnabled}
        addons={addons} // Pass addons for MultiSelect options
      />
      <StremThruSection
        stremThruEnabled={stremThruEnabled}
        setStremThruEnabled={setStremThruEnabled}
        stremThruUrl={stremThruUrl}
        setStremThruUrl={setStremThruUrl}
        stremThruCredential={stremThruCredential}
        setStremThruCredential={setStremThruCredential}
        stremThruPublicIp={stremThruPublicIp}
        setStremThruPublicIp={setStremThruPublicIp}
        stremThruProxiedAddons={stremThruProxiedAddons}
        setStremThruProxiedAddons={setStremThruProxiedAddons}
        stremThruProxiedServices={stremThruProxiedServices}
        setStremThruProxiedServices={setStremThruProxiedServices}
        mediaFlowEnabled={mediaFlowEnabled}
        addons={addons} // Pass addons for MultiSelect options
      />
    </>
  );
};