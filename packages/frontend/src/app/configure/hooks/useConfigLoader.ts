/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { Config } from '@aiostreams/types';
import { addonDetails, Settings } from '@aiostreams/utils';
import { decodeConfig, getManifestUrl } from '../utils/apiHelpers';
import { loadConfigFromDecoded, createConfig } from '../utils/configHelpers';
import { toast, Slide } from 'react-toastify';
import showToast, { toastOptions } from '../../../components/Toasts';


export const useConfigLoader = (setFunctions: any) => {
  const {
    setMaxMovieSizeSlider,
    setMaxEpisodeSizeSlider,
    setShowApiKeyInput,
    setChoosableAddons,
    setDisableButtons,
    setManifestUrl,
  } = setFunctions;

  useEffect(() => {
    // get config from the server
    fetch('/get-addon-config')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setMaxMovieSizeSlider(data.maxMovieSize || Settings.MAX_MOVIE_SIZE);
          setMaxEpisodeSizeSlider(data.maxEpisodeSize || Settings.MAX_EPISODE_SIZE);
          setShowApiKeyInput(data.apiKeyRequired);
          // filter out 'torrentio' from choosableAddons if torrentioDisabled is true
          if (data.torrentioDisabled) {
            setChoosableAddons(
              addonDetails
                .map((addon) => addon.id)
                .filter((id) => id !== 'torrentio')
            );
          }
        }
      });
  }, [setMaxMovieSizeSlider, setMaxEpisodeSizeSlider, setShowApiKeyInput, setChoosableAddons]);

  // Load config from the window path if it exists
  useEffect(() => {
    const path = window.location.pathname;
    try {
      const configMatch = path.match(/\/([^/]+)\/configure/);

      if (configMatch) {
        const config = configMatch[1];
        decodeConfig(config)
          .then((decodedConfig) => loadConfigFromDecoded(decodedConfig, setFunctions))
          .catch((error) => console.error('Failed to load config', error));
      }
    } catch (error) {
      console.error('Failed to load config', error);
    }
  }, [setFunctions]);

  const handleGenerateManifestUrl = async () => {
    setDisableButtons(true);
    const id = toast.loading('Generating manifest URL...', {
      ...toastOptions,
      toastId: 'generatingManifestUrl',
    });

    try {
      const config = createConfig(
        setFunctions.apiKey,
        setFunctions.overrideName,
        setFunctions.streamTypes,
        setFunctions.resolutions,
        setFunctions.qualities,
        setFunctions.visualTags,
        setFunctions.audioTags,
        setFunctions.encodes,
        setFunctions.sortCriteria,
        setFunctions.onlyShowCachedStreams,
        setFunctions.prioritisedLanguages,
        setFunctions.excludedLanguages,
        setFunctions.maxMovieSize,
        setFunctions.minMovieSize,
        setFunctions.maxEpisodeSize,
        setFunctions.minEpisodeSize,
        setFunctions.cleanResults,
        setFunctions.maxResultsPerResolution,
        setFunctions.strictIncludeFilters,
        setFunctions.excludeFilters,
        setFunctions.formatter,
        setFunctions.mediaFlowEnabled,
        setFunctions.mediaFlowProxyUrl,
        setFunctions.mediaFlowApiPassword,
        setFunctions.mediaFlowPublicIp,
        setFunctions.mediaFlowProxiedAddons,
        setFunctions.mediaFlowProxiedServices,
        setFunctions.stremThruEnabled,
        setFunctions.stremThruUrl,
        setFunctions.stremThruCredential,
        setFunctions.stremThruPublicIp,
        setFunctions.stremThruProxiedAddons,
        setFunctions.stremThruProxiedServices,
        setFunctions.addons,
        setFunctions.services,
        setFunctions.regexFilters,
        setFunctions.regexSortPatterns,
        setFunctions.userToken,
        setFunctions.adminPassword
      );
      const { success, manifest, message } = await getManifestUrl(config);

      if (!success || !manifest) {
        toast.update(id, {
          render: message || 'Failed to generate manifest URL',
          type: 'error',
          autoClose: 5000,
          isLoading: false,
        });
        setDisableButtons(false);
        return;
      }
      toast.update(id, {
        render: 'Manifest URL generated',
        type: 'success',
        autoClose: 5000,
        isLoading: false,
      });
      setManifestUrl(manifest);
      setDisableButtons(false);
    } catch (error: any) {
      console.error(error);
      toast.update(id, {
        render:
          'An unexpected error occurred while generating the manifest URL',
        type: 'error',
        autoClose: 5000,
        isLoading: false,
      });
      setDisableButtons(false);
    }
  };

  return { handleGenerateManifestUrl };
};