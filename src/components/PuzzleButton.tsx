import './puzzlebutton.css';

import type { PuzzleButtonData } from '../types';

type PuzzleButtonProps  = {
    /** The data to store. */
    data: PuzzleButtonData;
    /** How large should the button be? */
    size?: 'small' | 'medium' | 'large';
    /** Optional click handler */
    onClick: () => void;
}

/** Square Button UI component for user interaction */
export default function PuzzleButton({
    data: {id, x, y, z, state},
    size = 'medium',
    onClick,
    ...props
}: PuzzleButtonProps) {
    return (
      <button
        type="button"
        className={[
          'puzzlebutton',
          `puzzlebutton--${state}`,
          `puzzlebutton--${size}`
        ].join(' ')}
        onClick={() => onClick()}
        {...props}
      >
      </button>
    );
}
