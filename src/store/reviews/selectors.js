import {createSelector} from 'reselect';

export const selectReviewsReducer = state => state.reviews;

export const selectDistributionsLoading = createSelector(
  selectReviewsReducer,
  reviews => reviews.distributionsLoading,
);

export const selectDistributionsData = createSelector(
  selectReviewsReducer,
  reviews => reviews.distributions,
);

export const selectUserName = createSelector(
  selectReviewsReducer,
  reviews => reviews.userName,
);
