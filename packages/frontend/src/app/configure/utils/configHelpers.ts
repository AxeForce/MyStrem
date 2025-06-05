/* eslint-disable @typescript-eslint/no-explicit-any */
import { Config } from '@aiostreams/types';
import { addonDetails, serviceDetails } from '@aiostreams/utils';
import {
  defaultSortCriteria,
  defaultStreamTypes,
  defaultResolutions,
  defaultQualities,
  defaultVisualTags,
  defaultAudioTags,
  defaultEncodes,
} from '../constants';
import { allowedLanguages, allowedFormatters } from '@aiostreams/config';

export const createConfig = (
  apiKey: string,
  overrideName: string,
  streamTypes: Config['streamTypes'],
  resolutions: Config['resolutions'],
  qualities: Config['qualities'],
  visualTags: Config['visualTags'],
  audioTags: Config['audioTags'],
  encodes: Config['encodes'],
  sortCriteria: Config['sortBy'],
  onlyShowCachedStreams: boolean,
  prioritisedLanguages: string[] | null,
  excludedLanguages: string[] | null,
  maxMovieSize: number | null,
  minMovieSize: number | null,
  maxEpisodeSize: number | null,
  minEpisodeSize: number | null,
  cleanResults: boolean,
  maxResultsPerResolution: number | null,
  strictIncludeFilters: readonly { label: string; value: string }[],
  excludeFilters: readonly { label: string; value: string }[],
  formatter: string | undefined,
  mediaFlowEnabled: boolean,
  mediaFlowProxyUrl: string,
  mediaFlowApiPassword: string,
  mediaFlowPublicIp: string,
  mediaFlowProxiedAddons: string[] | null,
  mediaFlowProxiedServices: string[] | null,
  stremThruEnabled: boolean,
  stremThruUrl: string,
  stremThruCredential: string,
  stremThruPublicIp: string,
  stremThruProxiedAddons: string[] | null,
  stremThruProxiedServices: string[] | null,
  addons: Config['addons'],
  services: Config['services'],
  regexFilters: { excludePattern?: string; includePattern?: string },
  regexSortPatterns: string,
  userToken?: string,
  adminPassword?: string
): Config => {
  const config = {
    apiKey: apiKey,
    overrideName,
    streamTypes,
    resolutions,
    qualities,
    visualTags,
    audioTags,
    encodes,
    sortBy: sortCriteria,
    onlyShowCachedStreams,
    prioritisedLanguages,
    excludedLanguages,
    maxMovieSize,
    minMovieSize,
    maxEpisodeSize,
    minEpisodeSize,
    cleanResults,
    maxResultsPerResolution,
    strictIncludeFilters:
      strictIncludeFilters.length > 0
        ? strictIncludeFilters.map((filter) => filter.value)
        : null,
    excludeFilters:
      excludeFilters.length > 0
        ? excludeFilters.map((filter) => filter.value)
        : null,
    formatter: formatter || 'gdrive',
    mediaFlowConfig: {
      mediaFlowEnabled: mediaFlowEnabled && !stremThruEnabled,
      proxyUrl: mediaFlowProxyUrl,
      apiPassword: mediaFlowApiPassword,
      publicIp: mediaFlowPublicIp,
      proxiedAddons: mediaFlowProxiedAddons,
      proxiedServices: mediaFlowProxiedServices,
    },
    stremThruConfig: {
      stremThruEnabled: stremThruEnabled && !mediaFlowEnabled,
      url: stremThruUrl,
      credential: stremThruCredential,
      publicIp: stremThruPublicIp,
      proxiedAddons: stremThruProxiedAddons,
      proxiedServices: stremThruProxiedServices,
    },
    addons,
    services,
    regexFilters:
      regexFilters.excludePattern || regexFilters.includePattern
        ? {
            excludePattern: regexFilters.excludePattern || undefined,
            includePattern: regexFilters.includePattern || undefined,
          }
        : undefined,
    regexSortPatterns: regexSortPatterns,
    ...(userToken ? { userToken } : {}),
    ...(adminPassword ? { adminPassword } : {}),
  };
  // Always include userToken and adminPassword as strings
  return {
    ...config,
    userToken: userToken ?? '',
    adminPassword: adminPassword ?? '',
  };
};

export const loadValidValuesFromObject = (
  object: { [key: string]: boolean }[] | undefined,
  validValues: { [key: string]: boolean }[]
) => {
  if (!object) {
    return validValues;
  }

  const mergedValues = object.filter((value) =>
    validValues.some((validValue) =>
      Object.keys(validValue).includes(Object.keys(value)[0])
    )
  );

  for (const validValue of validValues) {
    if (
      !mergedValues.some(
        (value) => Object.keys(value)[0] === Object.keys(validValue)[0]
      )
    ) {
      mergedValues.push(validValue);
    }
  }

  return mergedValues;
};

export const loadValidSortCriteria = (sortCriteria: Config['sortBy']) => {
  if (!sortCriteria) {
    return defaultSortCriteria;
  }

  const mergedValues = sortCriteria
    .map((sort) => {
      const defaultSort = defaultSortCriteria.find(
        (defaultSort) => Object.keys(defaultSort)[0] === Object.keys(sort)[0]
      );
      if (!defaultSort) {
        return null;
      }
      return {
        ...sort,
        direction: defaultSort?.direction // only load direction if it exists in the defaultSort
          ? sort.direction || defaultSort.direction
          : undefined,
      };
    })
    .filter((sort) => sort !== null);

  defaultSortCriteria.forEach((defaultSort) => {
    if (
      !mergedValues.some(
        (sort) => Object.keys(sort)[0] === Object.keys(defaultSort)[0]
      )
    ) {
      mergedValues.push({
        ...defaultSort,
        direction: defaultSort.direction || undefined,
      });
    }
  });

  return mergedValues;
};

export const validateValue = (value: string | null, validValues: string[]) => {
  if (!value) {
    return null;
  }
  return validValues.includes(value) ? value : null;
};

export const loadValidServices = (services: Config['services']) => {
  if (!services) {
    return serviceDetails.map((service) => ({ ...service, enabled: false, credentials: {} }));
  }

  const mergedServices = services
    // filter out services that are not in serviceDetails
    .filter((service) => serviceDetails.some((ds) => ds.id === service.id))
    .map((service) => {
      const defaultService = serviceDetails.find(
        (ds) => ds.id === service.id
      );
      if (!defaultService) {
        return null;
      }

      // only load enabled and credentials from the previous config
      return {
        ...defaultService,
        enabled: service.enabled,
        credentials: service.credentials,
      };
    })
    .filter((service) => service !== null);

  // add any services that are in serviceDetails but not in services
  serviceDetails.forEach((defaultService) => {
    if (!mergedServices.some((service) => service.id === defaultService.id)) {
      mergedServices.push({ ...defaultService, enabled: false, credentials: {} });
    }
  });

  return mergedServices;
};

export const loadValidAddons = (addons: Config['addons']) => {
  if (!addons) {
    return [];
  }
  return addons.filter((addon) =>
    addonDetails.some((detail) => detail.id === addon.id)
  );
};

export const loadConfigFromDecoded = (decodedConfig: Config, setFunctions: any) => {
  const {
    setOverrideName,
    setStreamTypes,
    setResolutions,
    setQualities,
    setVisualTags,
    setAudioTags,
    setEncodes,
    setSortCriteria,
    setOnlyShowCachedStreams,
    setPrioritisedLanguages,
    setExcludedLanguages,
    setStrictIncludeFilters,
    setExcludeFilters,
    setRegexFilters,
    setRegexSortPatterns,
    setServices,
    setMaxMovieSize,
    setMinMovieSize,
    setMaxEpisodeSize,
    setMinEpisodeSize,
    setAddons,
    setCleanResults,
    setMaxResultsPerResolution,
    setMediaFlowEnabled,
    setMediaFlowProxyUrl,
    setMediaFlowApiPassword,
    setMediaFlowPublicIp,
    setMediaFlowProxiedAddons,
    setMediaFlowProxiedServices,
    setStremThruEnabled,
    setStremThruUrl,
    setStremThruCredential,
    setStremThruPublicIp,
    setApiKey,
    setFormatter,
  } = setFunctions;

  console.log('Loaded config', decodedConfig);
  setOverrideName(decodedConfig.overrideName || '');
  setStreamTypes(
    loadValidValuesFromObject(decodedConfig.streamTypes, defaultStreamTypes)
  );
  setResolutions(
    loadValidValuesFromObject(decodedConfig.resolutions, defaultResolutions)
  );
  setQualities(
    loadValidValuesFromObject(decodedConfig.qualities, defaultQualities)
  );
  setVisualTags(
    loadValidValuesFromObject(decodedConfig.visualTags, defaultVisualTags)
  );
  setAudioTags(
    loadValidValuesFromObject(decodedConfig.audioTags, defaultAudioTags)
  );
  setEncodes(
    loadValidValuesFromObject(decodedConfig.encodes, defaultEncodes)
  );
  setSortCriteria(loadValidSortCriteria(decodedConfig.sortBy));
  setOnlyShowCachedStreams(decodedConfig.onlyShowCachedStreams || false);
  // create an array for prioritised languages. if the old prioritiseLanguage is set, add it to the array
  const finalPrioritisedLanguages =
    decodedConfig.prioritisedLanguages || [];
  if ((decodedConfig as any).prioritiseLanguage) {
    finalPrioritisedLanguages.push((decodedConfig as any).prioritiseLanguage);
  }
  setPrioritisedLanguages(
    finalPrioritisedLanguages.filter((lang) =>
      allowedLanguages.includes(lang)
    ) || null
  );
  setExcludedLanguages(
    decodedConfig.excludedLanguages?.filter((lang) =>
      allowedLanguages.includes(lang)
    ) || null
  );
  setStrictIncludeFilters(
    decodedConfig.strictIncludeFilters?.map((filter) => ({
      label: filter,
      value: filter,
    })) || []
  );
  setExcludeFilters(
    decodedConfig.excludeFilters?.map((filter) => ({
      label: filter,
      value: filter,
    })) || []
  );
  setRegexFilters(decodedConfig.regexFilters || {});
  setRegexSortPatterns(decodedConfig.regexSortPatterns || '');

  setServices(loadValidServices(decodedConfig.services));
  setMaxMovieSize(
    decodedConfig.maxMovieSize || (decodedConfig as any).maxSize || null
  );
  setMinMovieSize(
    decodedConfig.minMovieSize || (decodedConfig as any).minSize || null
  );
  setMaxEpisodeSize(
    decodedConfig.maxEpisodeSize || (decodedConfig as any).maxSize || null
  );
  setMinEpisodeSize(
    decodedConfig.minEpisodeSize || (decodedConfig as any).minSize || null
  );
  setAddons(loadValidAddons(decodedConfig.addons));
  setCleanResults(decodedConfig.cleanResults || false);
  setMaxResultsPerResolution(decodedConfig.maxResultsPerResolution || null);
  setMediaFlowEnabled(
    decodedConfig.mediaFlowConfig?.mediaFlowEnabled || false
  );
  setMediaFlowProxyUrl(decodedConfig.mediaFlowConfig?.proxyUrl || '');
  setMediaFlowApiPassword(decodedConfig.mediaFlowConfig?.apiPassword || '');
  setMediaFlowPublicIp(decodedConfig.mediaFlowConfig?.publicIp || '');
  setMediaFlowProxiedAddons(
    decodedConfig.mediaFlowConfig?.proxiedAddons || null
  );
  setMediaFlowProxiedServices(
    decodedConfig.mediaFlowConfig?.proxiedServices || null
  );
  setStremThruEnabled(
    decodedConfig.stremThruConfig?.stremThruEnabled || false
  );
  setStremThruUrl(decodedConfig.stremThruConfig?.url || '');
  setStremThruCredential(decodedConfig.stremThruConfig?.credential || '');
  setStremThruPublicIp(decodedConfig.stremThruConfig?.publicIp || '');
  setApiKey(decodedConfig.apiKey || '');

  // set formatter
  const formatterValue = validateValue(
    decodedConfig.formatter,
    allowedFormatters as string[]
  );
  if (
    decodedConfig.formatter.startsWith('custom') &&
    decodedConfig.formatter.length > 7
  ) {
    setFormatter(decodedConfig.formatter);
  } else if (formatterValue) {
    setFormatter(formatterValue);
  }
};