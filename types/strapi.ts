import {
  strapiEntryWebhookSchema,
  strapiModelSchema,
  strapiProjectModelSchema,
  strapiWebhookSchema,
  strapiWebhookEventSchema,
  strapiWebhookModelSchema,
} from "@/validation";
import z from "zod";

export type StrapiModel = z.infer<typeof strapiModelSchema>;

export type StrapiWebhookEvent = z.infer<typeof strapiWebhookEventSchema>;

export type StrapiWebhookModel = z.infer<typeof strapiWebhookModelSchema>;

export type StrapiProjectModel = z.infer<typeof strapiProjectModelSchema>;

export type StrapiWebhook = z.infer<typeof strapiWebhookSchema>;

export type StrapiEntryWebook = z.infer<typeof strapiEntryWebhookSchema>;
