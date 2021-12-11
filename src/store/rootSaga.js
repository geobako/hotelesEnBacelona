import {all, fork} from 'redux-saga/effects';
import reviewSaga from './reviews/saga';

export default function* rootSaga() {
  yield all([fork(reviewSaga)]);
}
