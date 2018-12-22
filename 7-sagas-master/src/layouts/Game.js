import React from 'react';
import { connect } from 'react-redux';
import Target from '../components/Target';
import Info from '../components/Info';
import ButtonStart from '../components/ButtonStart';
import Difficulty from '../components/Difficulty';


// FIXME: maybe, do something about this ?
const mapStateToProps = state => ({
  lives: state.game.lives,
  score: state.game.score,
  isStarted: state.game.isStarted,
  list: state.targets.list,
  highScore: state.game.highScore,
  difficulty: state.game.difficulty,
  isGameOver: state.game.isGameOver,
  colorMenu1: state.game.colorMenu1,
  colorMenu2: state.game.colorMenu2,
  colorMenu3: state.game.colorMenu3,
  lastScore: state.game.lastScore
});

const GameLayout = ({ isStarted, lives, score, highScore, dispatch, list, difficulty, isGameOver, colorMenu1, colorMenu2, colorMenu3, lastScore }) => (
  <div
    style={{
      position: 'fixed',
      backgroundColor: '#21222C',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: '100vw',
      height: '100vh',
      margin: 'auto'
    }}
  >

    {
      isGameOver ? (<div
        style={{
          width: '200px',
          height: '100px',
          backgroundColor: 'red',
      
          position: 'absolute',
          top:'0',
          bottom: '0',
          left: '0',
          right: '0',
      
          margin: 'auto',
          padding: '10px 20px',      
          borderRadius: '10px',
          textAlign: 'center'

        }}>
        <div style={{marginBottom: '20px'}}>Current score: {lastScore}</div>
        <div style={{marginBottom: '20px'}}>HighScore: {highScore}</div>
        <button onClick={() => dispatch({ type: 'GAME_START_REQUESTED' })} style={{
          fontStyle: 'italic',
          textAlign: 'center',
          cursor: 'pointer',
          color: 'white',
          fontSize: '15px',
          borderRadius: '4px'
        }}> RESTART</button>
      </div>) : (<div>
        {isStarted ? (
          <React.Fragment>
            <Info lives={lives} score={score} highScore={highScore} dispatch={dispatch} />
            <div>
              {
                list.map(target => (
                  <Target key={target} x={target.x} y={target.y} value={target.value} backgroundColor={target.backgroundColor} onClick={() => dispatch({ type: 'TARGET_TOUCHED_REQUESTED', id: target.id })} />
                ))
              }
            </div>
          </React.Fragment>
        ) : (
            <React.Fragment>
              <Difficulty dispatch={dispatch} difficulty={difficulty} color_1={colorMenu1} color_2={colorMenu2} color_3={colorMenu3} />
              <ButtonStart onClick={() => dispatch({ type: 'GAME_START_REQUESTED' })} />
            </React.Fragment>
          )}</div>)
    }

  </div>
);

export default connect(mapStateToProps)(GameLayout);
