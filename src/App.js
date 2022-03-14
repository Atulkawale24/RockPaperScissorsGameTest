import React, { useState } from "react";
import PlayerVsComputer from "./PlayerVsComputer";
import PlayerVsPlayer from "./PlayerVsPlayer";

function App() {
  const [startPlayerVsComputerGame, setStartPlayerVsComputerGame] =
    useState(false);
  const [startPlayerVsPlayerGame, setStartPlayerVsPlayerGame] = useState(false);

  const startPlayerVsComputer = () => {
    setStartPlayerVsComputerGame(true);
  };

  const startPlayerVsPlayer = () => {
    setStartPlayerVsPlayerGame(true);
  };

  return (
    <section>
      {startPlayerVsComputerGame === true || startPlayerVsPlayerGame === true ? (
        <span></span>
      ) : (
        <div className="main">
          <h3>Select Play Mode</h3>
          <div className="player_vs_computer_btn">
            <button onClick={() => startPlayerVsComputer()}>
              Player VS Computer
            </button>
          </div>
          <div className="computer_vs_computer_btn">
            <button onClick={() => startPlayerVsPlayer()}>Computer VS Computer</button>
          </div>
        </div>
      )}
      {startPlayerVsComputerGame ? <PlayerVsComputer /> : <span></span>}

      {startPlayerVsPlayerGame ? <PlayerVsPlayer /> : <span></span>}
    </section>
  );
}

export default App;
