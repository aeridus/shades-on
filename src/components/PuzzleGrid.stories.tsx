import type { Meta, StoryObj } from '@storybook/react-webpack5';

import type { PuzzleButtonData } from '../types';

import PuzzleGrid from './PuzzleGrid';

import * as PuzzleButtonStories from './PuzzleButton.stories';

const meta = {
  component: PuzzleGrid,
  title: 'PuzzleGrid',
  decorators: [(story) => <div style={{ margin: '3rem' }}>{story()}</div>],
  tags: ["autodocs"],
  args: {
    ...PuzzleButtonStories.ActionsData,
  },
} satisfies Meta<typeof PuzzleGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    puzzleButtons: GenerateGrid(5, 5),
  },
};

function GenerateGrid(
    totalRows: number,
    totalColumns: number
) {
    var puzzleButtons : PuzzleButtonData[][] = [];
    // Future expansion to cube possible
    var z = 0;
    for (var x: number = 0; x < totalRows; ++x) {
        puzzleButtons[x] = [];
        for (var y: number = 0; y < totalColumns; ++y) {
            // Shaping the stories through args composition.
            // The data was inherited from the On story in PuzzleButton.stories.tsx.
            puzzleButtons[x][y] = { ...PuzzleButtonStories.On.args.data, id: `grid_${x}_${y}_${z}`, x: x, y: y, z: z};
        }
    }

    return puzzleButtons;
}