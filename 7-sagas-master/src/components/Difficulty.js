import React from 'react';

const Difficulty = ({ dispatch, color_1,color_2,color_3 }) => {
  const handleClick = (event) => {
    console.log(event.target.id);
    switch (event.target.id) {
      case "1":
        dispatch({ type: 'GAME_CHANGE_DIFFICULTY_REQUESTED', difficulty: 1 });
        break;
      case "2":
        dispatch({ type: 'GAME_CHANGE_DIFFICULTY_REQUESTED', difficulty: 2 });
        break;
      case "3":
        dispatch({ type: 'GAME_CHANGE_DIFFICULTY_REQUESTED', difficulty: 3 });
        break;
    }

  }
  return (
    <div
      style={{
        position: 'fixed',
        padding: '10px 20px',
        top: '10px',
        backgroundColor: 'white',
        borderRadius: '10px',
        textAlign: 'center',
        cursor: 'pointer'
      }}
    >
      <div>Difficulty</div>
      <div id="1" style={{ color: color_1 }} onClick={(event) => { handleClick(event) }}>1⃣</div>
      <div id="2" style={{ color: color_2 }} onClick={(event) => { handleClick(event) }}>2⃣</div>
      <div id="3" style={{ color: color_3 }} onClick={(event) => { handleClick(event) }}>3⃣</div>
    </div>
  )
};

export default Difficulty;
