import './puzzlegrid.css';

import type { PuzzleButtonData } from '../types';

import PuzzleButton from './PuzzleButton';

type PuzzleGridProps = {
    /** The list of tasks */
    puzzleButtons: PuzzleButtonData[][];
    /** Event to change the task to pinned */
    onClick: () => void;
};

export default function PuzzleGrid({
    puzzleButtons,
    onClick,
}: PuzzleGridProps) {
    return (
        <div className="puzzlegrid">
            {puzzleButtons.map((puzzleButtonRow) => (
                PuzzleRow(puzzleButtonRow, onClick)
            ))}
        </div>
    );
}

function PuzzleRow(
    puzzleButtonRow: PuzzleButtonData[],
    onClick: () => void
) {
    const events = {
        onClick,
    };

    return (
        <div className="puzzlerow">
            {puzzleButtonRow.map((puzzleButton) => (
                <PuzzleButton key={puzzleButton.id} data={puzzleButton} {...events} />
            ))}
        </div>
    );
}