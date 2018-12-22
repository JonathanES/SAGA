import { call, put, takeEvery, select } from 'redux-saga/effects'
import { delay } from 'redux-saga';

const TIME_INTERVAL = 1000;

function* handleAdd() {
    const list = yield select(state => state.targets.list);
    const lastElementId = list.length === 0 ? 0 : list[list.length - 1].id;
    yield put({ type: 'ADD_TARGET', id: lastElementId + 1 });
    yield put({ type: 'TARGET_DECREMENT_REQUESTED', list: list });
}

function* handleDecrement(action) {
    const list = action.list;
    const difficulty = yield select(state => state.game.difficulty);
    if (typeof (list) !== "undefined")
        for (let target of list) {
            if (typeof (target) !== "undefined" && target.value > 0) {
                yield call(delay, TIME_INTERVAL / difficulty);
                yield put({ type: 'DECREMENT_TARGET_VALUE', id: target.id});
            }
            else {
                yield put({ type: 'DELETE_TARGET', id: target.id });
                yield put({ type: 'LIVES_DECREMENT' });
            }
        };
}

function* handleTouched(action){
    yield put({ type: 'DELETE_TARGET', id: action.id });
    yield put({ type: 'SCORE_INCREMENT'});

}

function* targetSaga() {
    yield takeEvery('TARGET_ADD_REQUESTED', handleAdd);
    yield takeEvery('TARGET_TOUCHED_REQUESTED', handleTouched);
    yield takeEvery('TARGET_DECREMENT_REQUESTED', handleDecrement);
}

export default targetSaga;