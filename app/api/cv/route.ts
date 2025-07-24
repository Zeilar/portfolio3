import { strapiFetcher } from "@/api";

export async function GET() {
  const fileModelRes = await strapiFetcher("/api/upload/files/1");
  const { url } = await fileModelRes.json();

  const fileRes = await strapiFetcher(url);
  const file = await fileRes.blob();

  return new Response(file.stream(), {
    headers: {
      "Content-Type": file.type,
      "Content-Disposition": 'attachment; filename="CV.pdf"',
    },
  });
}
