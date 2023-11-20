import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Button 컴포넌트는 클릭 이벤트에 실행할 동작이 있는 경우 사용하는 컴포넌트 입니다.",
      },
    },
  },
  argTypes: {
    disabled: {
      description: "버튼을 비활성화할지 여부를 설정합니다.",
    },
    variant: {
      description: "버튼의 스타일을 설정합니다.",
      options: [
        "primaryLargeSquare",
        "primaryLargeRound",
        "primaryXLargeSquare",
        "primaryXLargeRound",
        "outline",
        "ghost",
        "ghostUnderline",
      ],
      control: { type: "radio" },
    },
    handleClick: {
      description: "버튼에 추가할 클릭 이벤트를 연결합니다.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const primaryLargeSquare: Story = {
  args: {
    disabled: false,
    children: "Primary Large Square",
  },
};

export const primaryLargeRound: Story = {
  args: {
    disabled: false,
    variant: "primaryLargeRound",
    children: "Primary Large Round",
  },
};

export const primaryXLargeSquare: Story = {
  args: {
    disabled: false,
    variant: "primaryXLargeSquare",
    children: "Primary Large Round",
  },
};

export const primaryXLargeRound: Story = {
  args: {
    disabled: false,
    variant: "primaryXLargeRound",
    children: "Primary Large Round",
  },
};

export const outline: Story = {
  args: {
    disabled: false,
    variant: "outline",
    children: "Outline",
  },
};

export const ghost: Story = {
  args: {
    disabled: false,
    variant: "ghost",
    children: "Ghost",
  },
};

export const ghostUnderline: Story = {
  args: {
    disabled: false,
    variant: "ghostUnderline",
    children: "Ghost Underline",
  },
};
