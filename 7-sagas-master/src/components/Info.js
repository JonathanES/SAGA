import React from 'react';
import ButtonStop from './ButtonStop'

const Info = ({ lives, score, highScore, dispatch }) => (
  <div
    style={{
      position: 'fixed',
      padding: '10px 20px',
      top: '10px',
      right: '10px',
      backgroundColor: 'white',
      borderRadius: '10px',
      textAlign: 'right'
    }}
  >
    <div>{lives} ❤️</div>
    <div>{score} 🥇</div>
    <div>{highScore} 🏆</div>
    <ButtonStop onClick={() => dispatch({ type: 'GAME_STOP_REQUESTED'})}/>
  </div>
);

export default Info;
