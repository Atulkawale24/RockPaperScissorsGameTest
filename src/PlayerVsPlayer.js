import React, { useState, useEffect } from "react";

const PlayerVsPlayer = () => {
  const [playerOnePoints, setPlayerOnePoints] = useState(0);
  const [playerTwoPoints, setPlayerTwoPoints] = useState(0);
  const [playerOneChoise, setPlayerOneChoise] = useState("rock");
  const [playerTwoChoise, setPlayerTwoChoise] = useState("rock");
  const [result, setResult] = useState(null);
  const [finalResult, setFinalResult] = useState(" ");
  const [gameOver, setGameOver] = useState(false);
  const [showBoxModal, setshowBoxModal] = useState(false);

  const choices = ["rock", "paper", "scissor"];

  const selectOption = (choice) => {
    setPlayerOneChoise(choice);
    randomComputerChoice();
  };

  const randomComputerChoice = () => {
    const generateComputerChoice =
      choices[Math.floor(Math.random() * choices.length)];
    setPlayerTwoChoise(generateComputerChoice);
  };

  const restartTheGame = () => {
    // window.location.reload();
    setPlayerOnePoints(0);
    setPlayerTwoPoints(0);
    setGameOver(false);
  };

  const closeModalBox = () => {
    setshowBoxModal(false);
  }
  useEffect(() => {
    const combineMoves = playerOneChoise + playerTwoChoise;
    if (playerOnePoints <= 4 && playerTwoPoints <= 4) {
      if (
        combineMoves === "rockscissor" ||
        combineMoves === "paperrock" ||
        combineMoves === "scissorpaper"
      ) {
        const updatedPlayerOnePoints = playerOnePoints + 1;
        setPlayerOnePoints(updatedPlayerOnePoints);
        setResult("Player one got the point");
        if (updatedPlayerOnePoints === 5) {
          setGameOver(true);
          setshowBoxModal(true);
          setFinalResult("Player one wins");
        }
      }

      if (
        combineMoves === "paperscissor" ||
        combineMoves === "scissorrock" ||
        combineMoves === "rockpaper"
      ) {
        const updatedplayerTwoPoints = playerTwoPoints + 1;
        setPlayerTwoPoints(updatedplayerTwoPoints);
        setResult("Player two got the point");
        if (updatedplayerTwoPoints === 5) {
          setGameOver(true);
          setshowBoxModal(true);
          setFinalResult("Player two wins");
        }
      }

      if (
        combineMoves === "rockrock" ||
        combineMoves === "paperpaper" ||
        combineMoves === "scissorscissor"
      ) {
        setResult("No one got point");
      }
    }
  }, [playerOneChoise, playerTwoChoise]);

  return (
    <div className="player_vs_computer_main">
      <div className="heading">
        <h1>Rock Paper Scissor</h1>
      </div>
      <div className="points_section">
        <h3>Player one Points: {playerOnePoints}</h3>
        <h3>Player two Points: {playerTwoPoints}</h3>
      </div>
      <div className="display_selected_option">
        <img src={`../images/${playerOneChoise}.png`} alt="rock.png" />
        <img src={`../images/${playerTwoChoise}.png`} alt="rock.png" />
      </div>
      <div className="select_option">
        {choices.map((choice, index) => {
          return (
            <button key={index} onClick={() => selectOption(choice)}>
              {choice}
            </button>
          );
        })}
      </div>
      <div className="result_section">
        <h3>Result: {result}</h3>
        <div className="gameOver_btn">
          {gameOver ? (
            <button onClick={() => restartTheGame()}>Restart Game</button>
          ) : (
            <span></span>
          )}
        </div>
      </div>
      {showBoxModal ? (
        <div className="winning_box_modal">
          <span onClick={() => closeModalBox()}>X</span>
          <div className="winning_msg">
            <h2>{finalResult}</h2>
          </div>
        </div>
      ) : (
        <span></span>
      )}
    </div>
  );
};
export default PlayerVsPlayer;
