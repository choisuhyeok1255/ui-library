import { css } from "@emotion/react";

import { theme } from "../../../styles";
import type { Variant } from "./Button";

export const button = (variant: Variant) => css`
  ${theme.button[variant]};
`;
