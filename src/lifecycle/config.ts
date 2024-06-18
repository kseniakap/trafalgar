// @DOC: Build time env
declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ProcessEnv {
      BUILT_AT?: string;
      GIT_COMMIT?: string;
      GIT_BRANCH?: string;
      DEVELOPMENT_IN_PRODUCTION?: 'true' | 'false';
      APP_BASE_URL?: string;
      PETS_API_BASE_URL?: string;
    }
  }
}

// @DOC: Build env
export const env = {
  BUILT_AT: process.env.BUILT_AT,
  GIT_COMMIT: process.env.GIT_COMMIT,
  GIT_BRANCH: process.env.GIT_BRANCH,
  DEVELOPMENT_IN_PRODUCTION: parseBoolean(process.env.DEVELOPMENT_IN_PRODUCTION, 'false'),
};

// @DOC: App config
export interface Config {
  APP_BASE_URL?: string;
  PETS_API_BASE_URL?: string;
}

export const config: Config = {
  APP_BASE_URL: process.env.APP_BASE_URL || '/',
  PETS_API_BASE_URL: process.env.PETS_API_BASE_URL || '/',
};

// @DOC: Use to parse env variables with options
// function parseOption(value: string | undefined, whitelist: string[], fallback: string | undefined = undefined) {
//   const processedFallback = fallback !== undefined ? fallback.toLowerCase() : undefined;
//   const processedValue = value !== undefined ? value.toLowerCase() : processedFallback;
//   if (whitelist.includes(processedValue!)) {
//     return processedValue;
//   }
//   return undefined;
// }

// @DOC: Use to parse boolean env variables
function parseBoolean(value?: string, fallback: string | undefined = undefined) {
  const processedFallback = fallback !== undefined ? fallback.toLowerCase() : undefined;
  const processedValue = value !== undefined ? value.toLowerCase() : processedFallback;
  if (['true', 't', '1', 'y', 'on'].includes(processedValue!)) return 'true';
  if (['false', 'f', '0', 'n', 'off'].includes(processedValue!)) return 'false';
  return undefined;
}
