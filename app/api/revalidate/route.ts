import { revalidateProjectsTag, revalidateProjectTag } from "@/cache";
import { strapiEntryWebhookSchema } from "@/validation";

export async function POST(req: Request): Promise<Response> {
  const [, secret] = req.headers.get("Authorization")?.split(" ") ?? [, ""];

  if (secret !== process.env.APP_REVALIDATE_SECRET) {
    console.warn(`Webhook request failed, secret ${secret} does not match the token.`);
    return new Response(null, { status: 401 });
  }

  const webhook = await req.json();
  console.log(`Incoming webhook request: ${JSON.stringify(webhook, null, 2)}`);
  const { model, event, entry } = strapiEntryWebhookSchema.parse(webhook);

  switch (model) {
    case "project":
      switch (event) {
        case "entry.create":
          revalidateProjectsTag();
          break;
        case "entry.update":
          revalidateProjectsTag();
          revalidateProjectTag(entry.id);
          break;
      }
      break;
  }

  return new Response(null, { status: 201 });
}
