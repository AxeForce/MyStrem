/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import styles from './page.module.css';
import { useConfigState } from './hooks/useConfigState';
import { createConfig } from './utils/configHelpers';
import { getManifestUrl } from './utils/apiHelpers';
import { useConfigLoader } from './hooks/useConfigLoader';
import { HeaderSection } from './components/HeaderSection';
import { AuthSections } from './components/AuthSections';
import { AdvancedSettings } from './components/AdvancedSettings';
import { InstallButtons } from './components/InstallButtons';
import showToast from '../../components/Toasts';
import addonPackage from '../../../package.json';

const version = addonPackage.version;

export default function Configure() {
  const {
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
  } = useConfigState();

  const config = createConfig(
    apiKey,
    overrideName,
    streamTypes,
    resolutions,
    qualities,
    visualTags,
    audioTags,
    encodes,
    sortCriteria,
    onlyShowCachedStreams,
    prioritisedLanguages,
    excludedLanguages,
    maxMovieSize,
    minMovieSize,
    maxEpisodeSize,
    minEpisodeSize,
    cleanResults,
    maxResultsPerResolution,
    strictIncludeFilters,
    excludeFilters,
    formatter,
    mediaFlowEnabled,
    mediaFlowProxyUrl,
    mediaFlowApiPassword,
    mediaFlowPublicIp,
    mediaFlowProxiedAddons,
    mediaFlowProxiedServices,
    stremThruEnabled,
    stremThruUrl,
    stremThruCredential,
    stremThruPublicIp,
    stremThruProxiedAddons,
    stremThruProxiedServices,
    addons,
    services,
    regexFilters,
    regexSortPatterns,
    userToken,
    adminPassword
  );

  const { handleGenerateManifestUrl } = useConfigLoader({
    setMaxMovieSizeSlider,
    setMaxEpisodeSizeSlider,
    setShowApiKeyInput,
    setChoosableAddons,
    setDisableButtons,
    setManifestUrl,
    showToast,
    createConfig: () => config, // Pass the config creation function
    getManifestUrl, // Pass the getManifestUrl function
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
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <button
          className={styles.supportMeButton}
          onClick={() => {
            window.open(
              'https://github.com/sponsors/Viren070',
              '_blank',
              'noopener noreferrer'
            );
          }}
        >
          <svg
            fill="#b30000"
            height="24px"
            width="24px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 490 490"
            xmlSpace="preserve"
            stroke="#b30000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                id="XMLID_25_"
                d="M316.554,108.336c4.553,6.922,2.629,16.223-4.296,20.774c-3.44,2.261-6.677,4.928-9.621,7.929 c-2.938,2.995-6.825,4.497-10.715,4.497c-3.791,0-7.585-1.427-10.506-4.291c-5.917-5.801-6.009-15.298-0.207-21.212 c4.439-4.524,9.338-8.559,14.562-11.992C302.698,99.491,312.002,101.414,316.554,108.336z M447.022,285.869 c-1.506,1.536-148.839,151.704-148.839,151.704C283.994,452.035,265.106,460,245,460s-38.994-7.965-53.183-22.427L42.978,285.869 c-57.304-58.406-57.304-153.441,0-211.847C70.83,45.634,107.882,30,147.31,30c36.369,0,70.72,13.304,97.69,37.648 C271.971,43.304,306.32,30,342.689,30c39.428,0,76.481,15.634,104.332,44.021C504.326,132.428,504.326,227.463,447.022,285.869z M425.596,95.028C403.434,72.44,373.991,60,342.69,60c-31.301,0-60.745,12.439-82.906,35.027c-1.122,1.144-2.129,2.533-3.538,3.777 c-7.536,6.654-16.372,6.32-22.491,0c-1.308-1.352-2.416-2.633-3.538-3.777C208.055,72.44,178.612,60,147.31,60 c-31.301,0-60.744,12.439-82.906,35.027c-45.94,46.824-45.94,123.012,0,169.836c1.367,1.393,148.839,151.704,148.839,151.704 C221.742,425.229,233.02,430,245,430c11.98,0,23.258-4.771,31.757-13.433l148.839-151.703l0,0 C471.535,218.04,471.535,141.852,425.596,95.028z M404.169,116.034c-8.975-9.148-19.475-16.045-31.208-20.499 c-7.746-2.939-16.413,0.953-19.355,8.698c-2.942,7.744,0.953,16.407,8.701,19.348c7.645,2.902,14.521,7.431,20.436,13.459 c23.211,23.658,23.211,62.153,0,85.811l-52.648,53.661c-5.803,5.915-5.711,15.412,0.206,21.212 c2.921,2.863,6.714,4.291,10.506,4.291c3.889,0,7.776-1.502,10.714-4.497l52.648-53.661 C438.744,208.616,438.744,151.275,404.169,116.034z"
              ></path>{' '}
            </g>
          </svg>
          Donate
        </button>
        <HeaderSection
          overrideName={overrideName}
          setOverrideName={setOverrideName}
          version={version}
        />

        <AuthSections
          userToken={userToken}
          setUserToken={setUserToken}
          adminPasswordInput={adminPasswordInput}
          setAdminPasswordInput={setAdminPasswordInput}
          adminPassword={adminPassword}
          setShowAdvancedSettings={setShowAdvancedSettings}
        />

        {showAdvancedSettings && (
          <AdvancedSettings
            choosableAddons={choosableAddons}
            addons={addons}
            setAddons={setAddons}
            regexFilters={regexFilters}
            setRegexFilters={setRegexFilters}
            regexSortPatterns={regexSortPatterns}
            setRegexSortPatterns={setRegexSortPatterns}
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
            maxResultsPerResolution={maxResultsPerResolution}
            setMaxResultsPerResolution={setMaxResultsPerResolution}
            formatterOptions={formatterOptions}
            formatter={formatter}
            setFormatter={setFormatter}
            cleanResults={cleanResults}
            setCleanResults={setCleanResults}
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
          />
        )}

        <InstallButtons
          disableButtons={disableButtons}
          handleGenerateManifestUrl={handleGenerateManifestUrl}
          manifestUrl={manifestUrl}
          setManifestUrl={setManifestUrl}
        />
      </div>
    </div>
  );
}
