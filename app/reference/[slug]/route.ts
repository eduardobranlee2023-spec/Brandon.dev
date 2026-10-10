import { componentReference } from "@/lib/component-reference";
import { getEntry, readyEntries } from "@/lib/registry";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return readyEntries.map((entry) => ({ slug: entry.slug }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry || entry.status !== "ready" || !entry.src) {
    return new Response("Not found", { status: 404 });
  }
  return new Response(await componentReference(entry), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      Link: `<${SITE}/docs/${entry.slug}>; rel="canonical"`,
    },
  });
}
