export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      /**
       * Default 3000.
       */
      APP_PORT: string;
      APP_STRAPI_API_KEY: string;
      /**
       * Protects the revalidate API route. Put this in the webhook bearer header.
       */
      APP_REVALIDATE_SECRET: string;
      /**
       * 1 or 0.
       */
      NEXT_TELEMETRY_DISABLED: string;
    }
  }
}
