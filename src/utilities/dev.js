export const isDebug = () => process?.env?.NODE_ENV === 'development';

export const getDomain = () =>
  isDebug() ? 'http://localhost:3000' : process?.env?.NEXT_PUBLIC_API_URL;

export const getCMSDomain = () => process?.env?.NEXT_PUBLIC_CMS_URL;

export const getGAID = () => process?.env?.NEXT_PUBLIC_GA_ID || '';

export const getPlayLink = () => process?.env?.NEXT_PUBLIC_PLAY_LINK || '/';
