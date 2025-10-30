export default function GameBoard({ squareSelected, board }) {

    return (
        <ol id="game-board">
            {
                board.map(
                    (row, rIndex) =>
                        <li key={rIndex}>
                            <ol>
                                {
                                    row.map(
                                        (playerSymbol, cIndex) =>
                                            <li key={cIndex}>
                                                <button
                                                    onClick={() => squareSelected(rIndex, cIndex)}
                                                    disabled={playerSymbol != null}
                                                >
                                                    {playerSymbol}
                                                </button>
                                            </li>
                                    )
                                }
                            </ol>
                        </li>
                )
            }
        </ol>
    );
}