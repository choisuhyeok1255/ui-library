import "@emotion/react";

import { theme } from "src/styles";

declare module "@emotion/react" {
  export interface Theme {
    color: typeof theme.color;
    button: typeof theme.button;
  }
}
