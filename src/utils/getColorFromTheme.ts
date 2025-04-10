import { Theme } from "@theme/index";

export const getColorFromTheme = (colorPath: string): string | undefined => {
  const keys = colorPath.split(".");
  let color: unknown = Theme.colors;

  for (const key of keys) {
    if (color && typeof color === "object" && key in color) {
      color = (color as Record<string, unknown>)[key];
    } else {
      return undefined;
    }
  }

  return typeof color === "string" ? color : undefined;
};
