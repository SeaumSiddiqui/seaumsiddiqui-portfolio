import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
const dataset = import.meta.env.VITE_SANITY_DATASET;
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
if (!projectId) {
  throw new Error(
    "VITE_SANITY_PROJECT_ID environment variable is not set. Please set it to your Sanity project ID.",
  );
}

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = createImageUrlBuilder(sanityClient);

export const urlFor = (source: SanityImageSource) => builder.image(source);
