const defaultState = {
  lives: 3,
  score: 0,
  lastScore: 0,
  isStarted: false,
  highScore: 0,
  difficulty: 1,
  isGameOver: false,
  colorMenu1: "red",
  colorMenu2: "black",
  colorMenu3: "black"
};

const game = (state = defaultState, action) => {
  switch (action.type) {
    case 'GAME_START':
      return {
        ...state,
        isStarted: true,
        isGameOver: false
      };
    case 'GAME_OVER':
      return {
        ...state,
        isGameOver: true,
        isStarted: false
      }
    case 'SCORE_INCREMENT':
      return {
        ...state,
        score: state.score + 1,
        highScore: state.highScore < (state.score + 1) ? state.score + 1 : state.highScore
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
        lastScore: state.score,
        lives: 3,
        score: 0,
        isStarted: false
      };
    case 'CHANGE_DIFFICULTY':
      return {
        ...state,
        difficulty: action.difficulty,
        colorMenu1: action.difficulty === 1 ? "red" : "black",
        colorMenu2: action.difficulty === 2 ? "red" : "black",
        colorMenu3: action.difficulty === 3 ? "red" : "black",
      }
    default:
      return state;
  }
};

export default game;
