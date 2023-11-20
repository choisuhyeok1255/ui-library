import { css } from "@emotion/react";

import color from "./color";

const disabled = css`
  :disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const commonPrimaryButton = css`
  border: 0;
  color: ${color.gray_000};
  background-color: ${color.blue_300};

  :hover {
    background-color: ${color.blue_400};
    cursor: pointer;
  }

  ${disabled};
`;

const commonPrimaryLargeButton = css`
  ${commonPrimaryButton};
  padding: 8px 20px;
`;

const commonPrimaryXLargeButton = css`
  ${commonPrimaryButton};
  padding: 12px;
`;

const commonGhostButton = css`
  border: 0px;
  padding: 4px 8px;
  color: ${color.gray_700};
  background-color: inherit;
`;

const button = {
  primaryLargeSquare: css`
    ${commonPrimaryLargeButton};
    border-radius: 5px;
  `,
  primaryLargeRound: css`
    ${commonPrimaryLargeButton};
    border-radius: 100px;
  `,
  primaryXLargeSquare: css`
    ${commonPrimaryXLargeButton};
    border-radius: 5px;
  `,
  primaryXLargeRound: css`
    ${commonPrimaryXLargeButton};
    border-radius: 100px;
  `,
  outline: css`
    border: 1px solid ${color.gray_300};
    padding: 8px 20px;
    border-radius: 5px;
    color: ${color.gray_700};
    background-color: ${color.gray_100};

    :hover {
      background-color: ${color.gray_200};
      cursor: pointer;
    }

    ${disabled};
  `,
  ghost: css`
    ${commonGhostButton};
  `,
  ghostUnderline: css`
    ${commonGhostButton};
    text-decoration-line: underline;
  `,
};

export default button;
