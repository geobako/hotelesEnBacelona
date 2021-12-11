import {call, put, takeLatest} from 'redux-saga/effects';
import {getReviewDistributionsRequest} from 'services/review-distributions';
import {
  getReviewDistributionsError,
  getReviewDistributionsSuccess,
} from 'store/reviews/actions';
import types from './types';

function* getDistributions(action) {
  try {
    const res = yield call(getReviewDistributionsRequest);

    yield put(getReviewDistributionsSuccess());
  } catch (e) {
    yield put(getReviewDistributionsError(e));
  }
}

function* reviewSaga() {
  yield takeLatest(types.GET_REVIEW_DISTRIBUTIONS.START, getDistributions);
}

export default reviewSaga;
