import types from './types';

export const getReviewDistributions = params => ({
  type: types.GET_REVIEW_DISTRIBUTIONS.START,
  payload: params,
});

export const getReviewDistributionsSuccess = params => ({
  type: types.GET_REVIEW_DISTRIBUTIONS.SUCCESS,
  payload: params,
});

export const getReviewDistributionsError = params => ({
  type: types.GET_REVIEW_DISTRIBUTIONS.ERROR,
  payload: params,
});

export const setUserName = params => ({
  type: types.SET_USER_NAME,
  payload: params,
});
