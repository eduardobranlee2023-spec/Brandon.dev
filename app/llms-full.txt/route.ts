import { componentReference } from "@/lib/component-reference";
import { readyEntries } from "@/lib/registry";
import { GITHUB, SEO_DESCRIPTION } from "@/lib/site";

export const dynamic = "force-static";

export async function GET() {
  const chunks = await Promise.all(readyEntries.map(componentReference));
  const body = [
    "# interior.dev — full component reference",
    "",
    `> ${SEO_DESCRIPTION} Most components expose a headless hook alongside a styled example; Progress Bar and Segmented Control currently export the component only.`,
    "",
    `Source code: ${GITHUB}`,
    "",
    chunks.join("\n\n---\n\n"),
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
