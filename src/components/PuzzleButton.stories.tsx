import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { fn } from '@storybook/test';

import PuzzleButton from './PuzzleButton';

export const ActionsData = {
  onClick: fn(),
}

const meta = {
  component: PuzzleButton,
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  }
} satisfies Meta<typeof PuzzleButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: {
      id: 'grid_0_0_0',
      x: 0,
      y: 0,
      z: 0,
      state: 'OFF',
    }
  }
};

export const Off: Story = {
  args: {
    data: {
      ...Default.args.data,
      state: 'OFF',
    }
  }
};

export const On: Story = {
  args: {
    data: {
      ...Default.args.data,
      state: 'ON',
    }
  }
};

export const Deluxe: Story = {
  args: {
    data: {
      ...Default.args.data,
      state: 'DELUXE',
    }
  }
};