import { afterEach, expect, it, vi } from "vitest";
import { demoStory } from "../../src/lib/content/fixtures";
const { fetchStory } = vi.hoisted(() => ({ fetchStory: vi.fn() }));
vi.mock("server-only", () => ({}));
vi.mock("@sanity/client", () => ({
  createClient: () => ({ fetch: fetchStory }),
}));
import { repository } from "../../src/lib/content/repository";
afterEach(() => {
  vi.unstubAllEnvs();
  vi.clearAllMocks();
});
it("requires dataset and project for Sanity", () => {
  vi.stubEnv("CONTENT_SOURCE", "sanity");
  vi.stubEnv("SANITY_PROJECT_ID", "");
  expect(() => repository()).toThrow(/SANITY_PROJECT_ID/);
});
it("queries the published singleton and validates the returned fields", async () => {
  vi.stubEnv("CONTENT_SOURCE", "sanity");
  vi.stubEnv("SANITY_PROJECT_ID", "example");
  vi.stubEnv("SANITY_DATASET", "development");
  fetchStory.mockResolvedValueOnce(demoStory).mockResolvedValueOnce({});
  const repo = repository();
  await expect(repo.story()).resolves.toEqual(demoStory);
  expect(fetchStory).toHaveBeenCalledWith(
    expect.stringContaining('_id=="aboutPage"'),
    {},
    expect.objectContaining({ next: { revalidate: 900, tags: ["aboutPage"] } }),
  );
  await expect(repo.story()).rejects.toThrow(/Invalid aboutPage/);
});
