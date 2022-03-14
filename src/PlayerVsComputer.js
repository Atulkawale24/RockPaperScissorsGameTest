import React, { useState, useEffect } from "react";

const PlayerVsComputer = () => {
  const [playerPoints, setPlayerPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [playerChoise, setPlayerChoise] = useState("rock");
  const [computerChoise, setComputerChoise] = useState("rock");
  const [result, setResult] = useState(null);
  const [finalResult, setFinalResult] = useState(" ");
  const [gameOver, setGameOver] = useState(false);
  const [showBoxModal, setshowBoxModal] = useState(false);

  const choices = ["rock", "paper", "scissor"];

  const selectOption = (choice) => {
    setPlayerChoise(choice);
    randomComputerChoice();
  };

  const randomComputerChoice = () => {
    const generateComputerChoice =
      choices[Math.floor(Math.random() * choices.length)];
    setComputerChoise(generateComputerChoice);
  };

  const restartTheGame = () => {
    // window.location.reload();
    setPlayerPoints(0);
    setComputerPoints(0);
    setGameOver(false);
  };

  const closeModalBox = () => {
    setshowBoxModal(false);
  }
  useEffect(() => {
    const combineMoves = playerChoise + computerChoise;
    if (playerPoints <= 4 && computerPoints <= 4) {
      if (
        combineMoves === "rockscissor" ||
        combineMoves === "paperrock" ||
        combineMoves === "scissorpaper"
      ) {
        const updatedPlayerPoints = playerPoints + 1;
        setPlayerPoints(updatedPlayerPoints);
        setResult("Player got the point");
        if (updatedPlayerPoints === 5) {
          setGameOver(true);
          setshowBoxModal(true);
          setFinalResult("Player wins");
        }
      }

      if (
        combineMoves === "paperscissor" ||
        combineMoves === "scissorrock" ||
        combineMoves === "rockpaper"
      ) {
        const updatedComputerPoints = computerPoints + 1;
        setComputerPoints(updatedComputerPoints);
        setResult("Computer got the point");
        if (updatedComputerPoints === 5) {
          setGameOver(true);
          setshowBoxModal(true);
          setFinalResult("Computer wins");
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
  }, [playerChoise, computerChoise]);

  return (
    <div className="player_vs_computer_main">
      <div className="heading">
        <h1>Rock Paper Scissor</h1>
      </div>
      <div className="points_section">
        <h3>Player Points: {playerPoints}</h3>
        <h3>Computer Points: {computerPoints}</h3>
      </div>
      <div className="display_selected_option">
        <img src={`../images/${playerChoise}.png`} alt="rock.png" />
        <img src={`../images/${computerChoise}.png`} alt="rock.png" />
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
export default PlayerVsComputer;
