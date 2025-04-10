import { CSSProperties, ReactNode } from "react";
import {
  FONT_FAMILIES_PROPS,
  FONT_SIZES_PROPS,
  FONT_WEIGHTS_PROPS,
  MAPPED_TAGS
} from "./constants";
import S from "./styles";
import { getColorFromTheme } from "@utils/getColorFromTheme";

export type TagVariants =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "label";

export interface TypographyProps extends CSSProperties {
  fontSize?: keyof typeof FONT_SIZES_PROPS;
  fontWeight?: keyof typeof FONT_WEIGHTS_PROPS;
  fontFamily?: keyof typeof FONT_FAMILIES_PROPS;
  tag?: TagVariants;
  children: ReactNode;
  color?: string;
  className?: string;
  tabIndex?: number;
  "aria-label"?: string;
  onClick?: () => void;
}

export const Typography = ({
  tag,
  children,
  fontFamily,
  fontWeight,
  color,
  fontSize = "bodyMedium",
  className,
  onClick,
  ...props
}: TypographyProps) => (
  <S.DynamicTypography
    {...props}
    onClick={onClick}
    tag={tag ? tag : MAPPED_TAGS[fontSize]}
    fontFamily={fontFamily}
    fontWeight={fontWeight}
    fontSize={fontSize}
    color={color ? getColorFromTheme(color) : undefined}
    className={className}
  >
    {children}
  </S.DynamicTypography>
);
