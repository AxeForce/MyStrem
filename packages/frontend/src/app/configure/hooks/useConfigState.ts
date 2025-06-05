/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Config } from '@aiostreams/types';
import { Settings, addonDetails } from '@aiostreams/utils';
import {
  defaultQualities,
  defaultVisualTags,
  defaultAudioTags,
  defaultEncodes,
  defaultSortCriteria,
  defaultResolutions,
  defaultStreamTypes,
  Option,
} from '../constants';
import { allowedFormatters } from '@aiostreams/config';

export const useConfigState = () => {
  const [formatterOptions, setFormatterOptions] = useState<string[]>(
    allowedFormatters.filter((f) => f !== 'imposter')
  );
  const [streamTypes, setStreamTypes] =
    useState<Config['streamTypes']>(defaultStreamTypes);
  const [resolutions, setResolutions] =
    useState<Config['resolutions']>(defaultResolutions);
  const [qualities, setQualities] = useState<Config['qualities']>(defaultQualities);
  const [visualTags, setVisualTags] = useState<Config['visualTags']>(defaultVisualTags);
  const [audioTags, setAudioTags] = useState<Config['audioTags']>(defaultAudioTags);
  const [encodes, setEncodes] = useState<Config['encodes']>(defaultEncodes);
  const [sortCriteria, setSortCriteria] =
    useState<Config['sortBy']>(defaultSortCriteria);
  const [formatter, setFormatter] = useState<string>();
  const [onlyShowCachedStreams, setOnlyShowCachedStreams] =
    useState<boolean>(false);
  const [prioritisedLanguages, setPrioritisedLanguages] = useState<
    string[] | null
  >(null);
  const [excludedLanguages, setExcludedLanguages] = useState<string[] | null>(
    null
  );
  const [addons, setAddons] = useState<Config['addons']>([]);
  const [maxMovieSize, setMaxMovieSize] = useState<number | null>(null);
  const [minMovieSize, setMinMovieSize] = useState<number | null>(null);
  const [maxEpisodeSize, setMaxEpisodeSize] = useState<number | null>(null);
  const [minEpisodeSize, setMinEpisodeSize] = useState<number | null>(null);
  const [cleanResults, setCleanResults] = useState<boolean>(false);
  const [maxResultsPerResolution, setMaxResultsPerResolution] = useState<
    number | null
  >(null);
  const [excludeFilters, setExcludeFilters] = useState<readonly Option[]>([]);
  const [strictIncludeFilters, setStrictIncludeFilters] = useState<
    readonly Option[]
  >([]);
  const [mediaFlowEnabled, setMediaFlowEnabled] = useState<boolean>(false);
  const [mediaFlowProxyUrl, setMediaFlowProxyUrl] = useState<string>('');
  const [mediaFlowApiPassword, setMediaFlowApiPassword] = useState<string>('');
  const [mediaFlowPublicIp, setMediaFlowPublicIp] = useState<string>('');
  const [mediaFlowProxiedAddons, setMediaFlowProxiedAddons] = useState<
    string[] | null
  >(null);
  const [mediaFlowProxiedServices, setMediaFlowProxiedServices] = useState<
    string[] | null
  >(null);

  const [stremThruEnabled, setStremThruEnabled] = useState<boolean>(false);
  const [stremThruUrl, setStremThruUrl] = useState<string>('');
  const [stremThruCredential, setStremThruCredential] = useState<string>('');
  const [stremThruPublicIp, setStremThruPublicIp] = useState<string>('');
  const [stremThruProxiedAddons, setStremThruProxiedAddons] = useState<
    string[] | null
  >(null);
  const [stremThruProxiedServices, setStremThruProxiedServices] = useState<
    string[] | null
  >(null);

  const [overrideName, setOverrideName] = useState<string>('');

  const [disableButtons, setDisableButtons] = useState<boolean>(false);
  const [maxMovieSizeSlider, setMaxMovieSizeSlider] = useState<number>(
    Settings.MAX_MOVIE_SIZE
  );
  const [maxEpisodeSizeSlider, setMaxEpisodeSizeSlider] = useState<number>(
    Settings.MAX_EPISODE_SIZE
  );
  const [choosableAddons, setChoosableAddons] = useState<string[]>(
    addonDetails.map((addon) => addon.id)
  );
  const [manifestUrl, setManifestUrl] = useState<string | null>(null);
  const [regexFilters, setRegexFilters] = useState<{
    excludePattern?: string;
    includePattern?: string;
  }>({});
  const [regexSortPatterns, setRegexSortPatterns] = useState<string>('');

  // New state variables for user token and admin password
  const [userToken, setUserToken] = useState<string>('');
  const [adminPasswordInput, setAdminPasswordInput] = useState<string>('');
  const [adminPassword, setAdminPassword] = useState<string>(''); // This would ideally come from an environment variable or a secure source
  const [showAdvancedSettings, setShowAdvancedSettings] = useState<boolean>(false);
  const [apiKey, setApiKey] = useState<string>('');
  const [showApiKeyInput, setShowApiKeyInput] = useState<boolean>(false);
  const [services, setServices] = useState<Config['services']>([]);


  return {
    formatterOptions, setFormatterOptions,
    streamTypes, setStreamTypes,
    resolutions, setResolutions,
    qualities, setQualities,
    visualTags, setVisualTags,
    audioTags, setAudioTags,
    encodes, setEncodes,
    sortCriteria, setSortCriteria,
    formatter, setFormatter,
    onlyShowCachedStreams, setOnlyShowCachedStreams,
    prioritisedLanguages, setPrioritisedLanguages,
    excludedLanguages, setExcludedLanguages,
    addons, setAddons,
    maxMovieSize, setMaxMovieSize,
    minMovieSize, setMinMovieSize,
    maxEpisodeSize, setMaxEpisodeSize,
    minEpisodeSize, setMinEpisodeSize,
    cleanResults, setCleanResults,
    maxResultsPerResolution, setMaxResultsPerResolution,
    excludeFilters, setExcludeFilters,
    strictIncludeFilters, setStrictIncludeFilters,
    mediaFlowEnabled, setMediaFlowEnabled,
    mediaFlowProxyUrl, setMediaFlowProxyUrl,
    mediaFlowApiPassword, setMediaFlowApiPassword,
    mediaFlowPublicIp, setMediaFlowPublicIp,
    mediaFlowProxiedAddons, setMediaFlowProxiedAddons,
    mediaFlowProxiedServices, setMediaFlowProxiedServices,
    stremThruEnabled, setStremThruEnabled,
    stremThruUrl, setStremThruUrl,
    stremThruCredential, setStremThruCredential,
    stremThruPublicIp, setStremThruPublicIp,
    stremThruProxiedAddons, setStremThruProxiedAddons,
    stremThruProxiedServices, setStremThruProxiedServices,
    overrideName, setOverrideName,
    disableButtons, setDisableButtons,
    maxMovieSizeSlider, setMaxMovieSizeSlider,
    maxEpisodeSizeSlider, setMaxEpisodeSizeSlider,
    choosableAddons, setChoosableAddons,
    manifestUrl, setManifestUrl,
    regexFilters, setRegexFilters,
    regexSortPatterns, setRegexSortPatterns,
    userToken, setUserToken,
    adminPasswordInput, setAdminPasswordInput,
    adminPassword, setAdminPassword,
    showAdvancedSettings, setShowAdvancedSettings,
    apiKey, setApiKey,
    showApiKeyInput, setShowApiKeyInput,
    services, setServices,
  };
};