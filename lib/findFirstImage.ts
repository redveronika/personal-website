import { Content } from "@prismicio/client";
import * as prismicH from "@prismicio/helpers";

export const findFirstImage = (slices: Content.ArticleDocumentDataSlicesSlice[]) => {
  const imageSlice = slices.find((slice) => slice.slice_type === "image") as Content.ImageSlice;

if (imageSlice && prismicH.isFilled.image(imageSlice.primary.image)) {
    return imageSlice.primary.image;
  }
};
