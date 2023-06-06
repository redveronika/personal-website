import * as prismicH from "@prismicio/helpers";
import { ArticleDocument } from "../types.generated";
import type { Content } from '@prismicio/client'

export const getExcerpt = (slices: Content.ArticleDocumentDataSlicesSlice[]) => {
  const text = (slices
    .filter((slice) => slice.slice_type === "text") as Content.TextSlice[])
    .map((slice) => prismicH.asText(slice.primary.text))
    .join(" ");

  const excerpt = text.substring(0, 300);

  if (text.length > 300) {
    return excerpt.substring(0, excerpt.lastIndexOf(" ")) + "…";
  } else {
    return excerpt;
  }
};
