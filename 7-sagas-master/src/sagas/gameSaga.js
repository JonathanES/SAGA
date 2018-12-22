import { call, put, takeEvery, select } from 'redux-saga/effects'
import { delay } from 'redux-saga';

function *handleGame(){
    let time_interval = 1000;
    yield put({type: 'GAME_START'});
    while (true){
        const isStarted = yield select(state => state.game.isStarted);
        if (!isStarted)
            break;
        yield call(delay, time_interval);
        const lives = yield select(state => state.game.lives);
        const score = yield select(state => state.game.score);
        const spawnNumber = score < 5 ? 1 : (score < 15 ? 2 : 3);
        for (let i = 0; i < spawnNumber; i++)  
            yield put({type: "TARGET_ADD_REQUESTED"});
        if (lives <= 0){
            yield put({type: "GAME_STOP_REQUESTED"});
        }
    }
}
function* handleStop(){
    yield put({type: "GAME_STOP"});
    yield put({type: "RESET"});
}

function* handleDifficulty(action){
    yield put({type: "CHANGE_DIFFICULTY", difficulty: action.difficulty})
}

function *gameSaga(){
    yield takeEvery('GAME_START_REQUESTED', handleGame);
    yield takeEvery('GAME_STOP_REQUESTED', handleStop);
    yield takeEvery('GAME_CHANGE_DIFFICULTY_REQUESTED', handleDifficulty);
}

export default gameSaga;