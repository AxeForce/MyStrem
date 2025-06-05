import React from 'react';
import { Section } from '../../../../components/Section';
import Slider from '../../../../components/Slider';

interface SizeFilterSectionProps {
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
}

export const SizeFilterSection: React.FC<SizeFilterSectionProps> = ({
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
}) => {
  return (
    <Section
      title="Size Filters"
      description="Set minimum and maximum sizes for movies and episodes."
    >
      <div>
        <label>Min Movie Size (MB)</label>
        <Slider
          id="minMovieSize"
          maxValue={maxMovieSizeSlider}
          value={minMovieSize || 0}
          setValue={setMinMovieSize}
          defaultValue="min"
        />
      </div>
      <div>
        <label>Max Movie Size (MB)</label>
        <Slider
          id="maxMovieSize"
          maxValue={maxMovieSizeSlider}
          value={maxMovieSize || maxMovieSizeSlider}
          setValue={setMaxMovieSize}
          defaultValue="max"
        />
      </div>
      <div>
        <label>Min Episode Size (MB)</label>
        <Slider
          id="minEpisodeSize"
          maxValue={maxEpisodeSizeSlider}
          value={minEpisodeSize || 0}
          setValue={setMinEpisodeSize}
          defaultValue="min"
        />
      </div>
      <div>
        <label>Max Episode Size (MB)</label>
        <Slider
          id="maxEpisodeSize"
          maxValue={maxEpisodeSizeSlider}
          value={maxEpisodeSize || maxEpisodeSizeSlider}
          setValue={setMaxEpisodeSize}
          defaultValue="max"
        />
      </div>
      {/* Removed extra closing div */}
    </Section>
  );
};