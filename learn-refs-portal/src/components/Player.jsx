import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef(); // this eliminate the usage of multiple state (to handle the click and name)

  const [currName, setCurrName] = useState(null);

  function handleClick(){
    setCurrName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {currName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
