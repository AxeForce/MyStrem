// backendApi.ts
// Elegant and simple backend API client for MyStrem backend.
// Handles subscription validation and Premiumize key retrieval.
// Uses axios for HTTP requests with robust error handling.
// js6 standard JSDoc comments included.

import axios, { AxiosError } from 'axios';

/**
 * Validate the user's subscription with the backend.
 * @param {string} userToken - The user's authentication token.
 * @param {string} backendUrl - The backend API base URL.
 * @returns {Promise<{ isValid: boolean, message?: string }>} 
 * Resolves with subscription validity and optional message.
 */
export async function checkSubscription(
  userToken: string,
  backendUrl: string
): Promise<{ isValid: boolean; message?: string }> {
  try {
    const response = await axios.post(
      `${backendUrl}/subscription/validate`,
      {},
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
        timeout: 10000,
      }
    );
    if (
      response.data &&
      typeof response.data.isValid === 'boolean'
    ) {
      return {
        isValid: response.data.isValid,
        message: response.data.message,
      };
    }
    return {
      isValid: false,
      message: 'Invalid response from backend.',
    };
  } catch (error) {
    let message = 'Network or server error.';
    if (axios.isAxiosError(error)) {
      const err = error as AxiosError;
      if (err.response && err.response.data && typeof err.response.data === 'object') {
        // @ts-ignore
        message = err.response.data.message || message;
      } else if (err.message) {
        message = err.message;
      }
    }
    return {
      isValid: false,
      message,
    };
  }
}

/**
 * Retrieve the Premiumize key for the user from the backend.
 * @param {string} userToken - The user's authentication token.
 * @param {string} backendUrl - The backend API base URL.
 * @returns {Promise<string|null>} 
 * Resolves with the Premiumize key string, or null if unavailable.
 */
export async function getPremiumizeKey(
  userToken: string,
  backendUrl: string
): Promise<string | null> {
  try {
    const response = await axios.get(
      `${backendUrl}/premiumize/key`,
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
        timeout: 10000,
      }
    );
    if (response.data && typeof response.data.key === 'string') {
      return response.data.key;
    }
    return null;
  } catch (error) {
    // Optionally log error here
    return null;
  }
}