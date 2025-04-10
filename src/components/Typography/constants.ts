import { Theme } from "@theme/index";

export const FONT_SIZES_PROPS = {
  ...Theme.fontSizes.body,
  ...Theme.fontSizes.headings,
  ...Theme.fontSizes.label
};

export const FONT_WEIGHTS_PROPS = {
  ...Theme.fontWeight
};

export const FONT_FAMILIES_PROPS = {
  ...Theme.fontFamilies
};

export const MAPPED_TAGS = {
  labelExtraSmall: "label",
  labelSmall: "label",
  labelLarge: "label",
  heading1: "h1",
  heading2: "h2",
  heading3: "h3",
  heading4: "h4",
  heading5: "h5",
  heading6: "h6",
  heading7: "h6",
  bodyLarge: "p",
  bodyMedium: "p",
  bodyNormal: "p",
  bodySmall: "p"
} as const;
