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
  highScore: state.game.highScore
});

const GameLayout = ({ isStarted, lives, score, highScore, dispatch, list }) => (
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
    {isStarted ? (
      <React.Fragment>
        <Info lives={lives} score={score} highScore={highScore} dispatch={dispatch}/>
        <div>
        {
          list.map(target => (
            <Target key={target} x={target.x} y={target.y} value={target.value} backgroundColor={target.backgroundColor} onClick={() => dispatch({ type: 'TARGET_TOUCHED_REQUESTED', id: target.id})} />
          ))
        }
        </div>
      </React.Fragment>
    ) : (
      <React.Fragment>
      <Difficulty dispatch={dispatch}/>
      <ButtonStart onClick={() => dispatch({ type: 'GAME_START_REQUESTED' })} />
      </React.Fragment>
    )}
  </div>
);

export default connect(mapStateToProps)(GameLayout);
