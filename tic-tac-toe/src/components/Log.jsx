export default function Log({ currTurns }) {
    return (
        <ol id="log">
            {currTurns.map(
                (value) =>
                    <li key={`${value.square.row}${value.square.col}`}>
                        Player with symbol {value.player} selected {value.square.row}, {value.square.col}
                    </li>
            )}
        </ol>
    );
}