const defaultState = {
  lives: 3,
  score: 0,
  isStarted: false,
  highScore: 0,
  difficulty: 1
};

const game = (state = defaultState, action) => {
  switch (action.type) {
    case 'GAME_START':
      return {
        ...state,
        isStarted: true
      };
    case 'SCORE_INCREMENT':
      return {
        ...state,
        score: state.score + 1
      }
    case 'LIVES_DECREMENT':
      return {
        ...state,
        lives: state.lives - 1
      }
    case 'GAME_STOP':
      return {
        ...state,
        highScore: state.highScore < state.score ? state.score : state.highScore,
        lives: 3,
        score: 0,
        isStarted: false
      };
    case 'CHANGE_DIFFICULTY':
      return {
        ...state,
        difficulty: action.difficulty
      }
    default:
      return state;
  }
};

export default game;
