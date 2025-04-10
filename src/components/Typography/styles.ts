import { createElement } from "react";
import { TypographyProps } from ".";
import {
  FONT_FAMILIES_PROPS,
  FONT_SIZES_PROPS,
  FONT_WEIGHTS_PROPS
} from "./constants";
import styled from "styled-components";

interface DynamicTypographyProps extends Omit<TypographyProps, "tag"> {
  tag: string;
}

const DynamicTypography = styled(
  ({ tag, children, ...props }: DynamicTypographyProps) =>
    createElement(tag, props, children)
)`
  font-family: ${({ fontFamily = "manrope" }) =>
    FONT_FAMILIES_PROPS[fontFamily]};
  font-size: ${({ fontSize = "bodyMedium" }) => FONT_SIZES_PROPS[fontSize]};
  font-weight: ${({ fontWeight = "regular" }) =>
    FONT_WEIGHTS_PROPS[fontWeight]};
  overflow-wrap: break-word;
  color: ${({ color }) => color || "inherit"};
`;

export default {
  DynamicTypography
};
