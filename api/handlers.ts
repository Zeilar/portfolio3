export function strapiFetcher(input: `/${string}`, init?: RequestInit) {
  return fetch(
    `${process.env.NODE_ENV === "production" ? "https" : "http"}://strapi:${
      process.env.STRAPI_PORT
    }${input}`,
    {
      ...init,
      headers: { Authorization: `Bearer ${process.env.APP_STRAPI_API_KEY}`, ...init?.headers },
    }
  );
}
