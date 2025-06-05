/* eslint-disable @typescript-eslint/no-explicit-any */
import { validateConfig } from '@aiostreams/config';
import { isValueEncrypted } from '@aiostreams/utils';
import { Config } from '@aiostreams/types';

export const fetchWithTimeout = async (
  url: string,
  options: RequestInit | undefined,
  timeoutMs = 30000
) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    console.log('Fetching', url, `with data: ${options?.body}`);
    const res = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(timeout);
    return res;
  } catch {
    console.log('Clearing timeout');
    return clearTimeout(timeout);
  }
};

export const getManifestUrl = async (
  config: Config,
  protocol = window.location.protocol,
  root = window.location.host
): Promise<{
  success: boolean;
  manifest: string | null;
  message: string | null;
}> => {
  const { valid, errorMessage } = validateConfig(config, 'client');
  if (!valid) {
    return {
      success: false,
      manifest: null,
      message: errorMessage || 'Invalid config',
    };
  }
  console.log('Config', config);

  try {
    const encryptPath = `/encrypt-user-data`;
    const response = await fetchWithTimeout(encryptPath, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: JSON.stringify(config) }),
    });
    if (!response) {
      throw new Error('encrypt-user-data failed: no response within timeout');
    }

    if (!response.ok) {
      throw new Error(
        `encrypt-user-data failed with status ${response.status} and statusText ${response.statusText}`
      );
    }

    const data = await response.json();
    if (!data.success) {
      if (data.error) {
        return {
          success: false,
          manifest: null,
          message: data.error || 'Failed to generate config',
        };
      }
      throw new Error(`Encryption service failed, ${data.message}`);
    }

    const configString = data.data;
    return {
      success: true,
      manifest: `${protocol}//${root}/${configString}/manifest.json`,
      message: null,
    };
  } catch (error: any) {
    console.error(error);
    return {
      success: false,
      manifest: null,
      message: error.message || 'Failed to encrypt config',
    };
  }
};

export async function decodeConfig(config: string): Promise<Config> {
  let decodedConfig: Config;
  if (isValueEncrypted(config) || config.startsWith('B-')) {
    throw new Error('Encrypted Config Not Supported');
  } else {
    decodedConfig = JSON.parse(
      Buffer.from(decodeURIComponent(config), 'base64').toString('utf-8')
    );
  }
  return decodedConfig;
}