import axios from 'axios';
import {API_URL} from 'config/constants';

export const getReviewDistributionsRequest = async () => {
  return await axios.get(`${API_URL}/review-distribution`);
};
