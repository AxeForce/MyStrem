import {
  Resolution,
  SortBy,
  Quality,
  VisualTag,
  AudioTag,
  Encode,
  StreamType,
} from '@aiostreams/types';

export interface Option {
  label: string;
  value: string;
}

export const defaultQualities: Quality[] = [
  { 'BluRay REMUX': true },
  { BluRay: true },
  { 'WEB-DL': true },
  { WEBRip: true },
  { HDRip: true },
  { 'HC HD-Rip': true },
  { DVDRip: true },
  { HDTV: true },
  { CAM: true },
  { TS: true },
  { TC: true },
  { SCR: true },
  { Unknown: true },
];

export const defaultVisualTags: VisualTag[] = [
  { 'HDR+DV': true },
  { 'HDR10+': true },
  { DV: true },
  { HDR10: true },
  { HDR: true },
  { '10bit': true },
  { '3D': true },
  { IMAX: true },
  { AI: true },
  { SDR: true },
];

export const defaultAudioTags: AudioTag[] = [
  { Atmos: true },
  { 'DD+': true },
  { DD: true },
  { 'DTS-HD MA': true },
  { 'DTS-HD': true },
  { DTS: true },
  { TrueHD: true },
  { '5.1': true },
  { '7.1': true },
  { FLAC: true },
  { AAC: true },
];

export const defaultEncodes: Encode[] = [
  { AV1: true },
  { HEVC: true },
  { AVC: true },
  { Xvid: true },
  { DivX: true },
  { 'H-OU': true },
  { 'H-SBS': true },
  { Unknown: true },
];

export const defaultSortCriteria: SortBy[] = [
  { cached: true, direction: 'desc' },
  { personal: true, direction: 'desc' },
  { resolution: true },
  { language: true },
  { size: true, direction: 'desc' },
  { streamType: false },
  { visualTag: false },
  { service: false },
  { audioTag: false },
  { encode: false },
  { quality: false },
  { seeders: false, direction: 'desc' },
  { addon: false },
  { regexSort: false, direction: 'desc' },
];

export const defaultResolutions: Resolution[] = [
  { '2160p': true },
  { '1440p': true },
  { '1080p': true },
  { '720p': true },
  { '480p': true },
  { Unknown: true },
];

export const defaultStreamTypes: StreamType[] = [
  { usenet: true },
  { debrid: true },
  { unknown: true },
  { p2p: true },
  { live: true },
];