import { z } from "zod";

/**
 * Make sure these types are up to date with the dashboard.
 */

const dateTimeSchema = z.iso.datetime();

export const strapiWebhookEventSchema = z.union([
  z.literal("entry.create"),
  z.literal("entry.update"),
  z.literal("entry.publish"),
  z.literal("entry.unpublish"),
]);

export const strapiWebhookModelSchema = z.literal("project"); // Use z.union when adding more.

export const strapiModelSchema = z.object({
  id: z.number(),
  documentId: z.string(),
  publishedAt: dateTimeSchema.nullable(),
  createdAt: dateTimeSchema,
  updatedAt: dateTimeSchema,
});

export const strapiProjectModelSchema = z.object({
  ...strapiModelSchema.shape,
  /**
   * Should be unique, and can therefore be used as an id.
   */
  title: z.string(),
  url: z.url(),
  description: z.string(),
});

export const strapiWebhookSchema = z.object({
  event: strapiWebhookEventSchema,
  createdAt: dateTimeSchema,
  /**
   * E.g "api::project.project".
   */
  uid: z.string(),
});

export const strapiEntryWebhookSchema = z.object({
  ...strapiWebhookSchema.shape,
  model: strapiWebhookModelSchema,
  entry: strapiModelSchema, // Use z.union when adding more.
});
