import { StrapiWebhookModel } from "@/types";
import { revalidateTag } from "next/cache";

const YEAR_IN_SECONDS = 31_556_926;

export function getProjectsTag(): `${StrapiWebhookModel}s` {
  return "projects";
}

export function getProjectTag(id: number): `${StrapiWebhookModel}-${typeof id}` {
  return `${"project" satisfies StrapiWebhookModel}-${id}`;
}

export function revalidateProjectTag(id: number): void {
  revalidateTag(getProjectTag(id));
}

export function revalidateProjectsTag(): void {
  revalidateTag(getProjectsTag());
}

export function getProjectsNextConfig(): NextFetchRequestConfig {
  return { revalidate: YEAR_IN_SECONDS, tags: [getProjectsTag()] };
}

export function getProjectNextConfig(id: number): NextFetchRequestConfig {
  return { revalidate: YEAR_IN_SECONDS, tags: [getProjectTag(id)] };
}
