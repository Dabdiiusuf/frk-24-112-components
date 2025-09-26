import React, { useContext, useEffect } from "react";
import { GomokuContext } from "../../providers/GomokuContext";

const RandomWinText = () => {
  const { playerOne, playerTwo, setRandomText } = useContext(GomokuContext);

  useEffect(() => {
    const RandomTextArray = [
      `   "Yo-ho-ho! The match be over, and ${playerOne} claims the treasure o’ triumph! The rest be feedin’ the fishes!"`,
      "Shiver me timbers! The game’s end has come, and it be Daniel who hoists the black flag o’ victory!",
      "Arrr, the board be conquered! Daniel rules these seas, leavin’ naught but wreckage in his wake!",
      "Game over, ye scallywags! Daniel be the last pirate standin’, with the crown o’ glory upon his head!",
      "Blimey! The cannons be silenced and the battle be won. Daniel sails away with victory’s bounty!",
      "Arrr! The seas be still, the battle be done... Cap’n Daniel stands victorious upon the bones of his foes!",
    ];
    const textIndex = Math.floor(Math.random() * RandomTextArray.length);

    setRandomText(RandomTextArray[textIndex]);
  }, [playerOne, playerTwo, setRandomText]);

  return <div></div>;
};

export default RandomWinText;
