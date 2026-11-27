import "server-only";
import { createClient } from "@sanity/client";
import { contentSource, readStory, type ContentRepository } from "./story";
import { fixtures } from "./fixtures";
export function repository(): ContentRepository {
  if (contentSource(process.env.CONTENT_SOURCE) === "fixture") return fixtures;
  const projectId = process.env.SANITY_PROJECT_ID;
  const dataset = process.env.SANITY_DATASET;
  if (!projectId || !dataset)
    throw new Error(
      "Set SANITY_PROJECT_ID and SANITY_DATASET for published content.",
    );
  const client = createClient({
    projectId,
    dataset,
    apiVersion: "2025-02-19",
    useCdn: true,
    perspective: "published",
  });
  return {
    async story() {
      return readStory(
        await client.fetch(
          '*[_type=="aboutPage" && _id=="aboutPage"][0]{title,body}',
          {},
          { next: { revalidate: 900, tags: ["aboutPage"] } },
        ),
      );
    },
  };
}
