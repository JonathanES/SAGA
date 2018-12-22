import React from 'react';
import ButtonStop from './ButtonStop'

const Difficulty = ({ dispatch }) => (
  <div
    style={{
      position: 'fixed',
      padding: '10px 20px',
      top: '10px',
      backgroundColor: 'white',
      borderRadius: '10px',
      textAlign: 'right',
      cursor: 'pointer'
    }}
  >
    <div onClick={() => dispatch({ type: 'GAME_CHANGE_DIFFICULTY_REQUESTED', difficulty: 1})}>LVL 1⃣</div>
    <div onClick={() => dispatch({ type: 'GAME_CHANGE_DIFFICULTY_REQUESTED', difficulty: 2})}>LVL 2⃣</div>
    <div onClick={() => dispatch({ type: 'GAME_CHANGE_DIFFICULTY_REQUESTED', difficulty: 3})}>LVL 3⃣</div>
  </div>
);

export default Difficulty;
