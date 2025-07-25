export function strapiFetcher(input: `/${string}`, init?: RequestInit) {
  return fetch(`http://strapi:1337${input}`, {
    ...init,
    headers: { Authorization: `Bearer ${process.env.APP_STRAPI_API_KEY}`, ...init?.headers },
  });
}
