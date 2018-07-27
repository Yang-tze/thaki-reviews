import fetch from 'cross-fetch';

const selectProduct = (product) => {
  return {
    type: 'SELECT_PRODUCT',
    product,
  };
};

// const refreshProduct = (productId) => {
//   return {
//     type: 'REFRESH_PRODUCT',
//     productId
//   }
// };

const requestAggregates = (product) => {
  return {
    type: 'REQUEST_AGGREGATES',
    product,
  };
};

const requestReviews = (product) => {
  return {
    type: 'REQUEST_REVIEWS',
    product,
  };
};

const receiveAggregates = (aggregates) => {
  return {
    type: 'RECEIVE_AGGREGATES',
    aggregates,
    // receivedAt: Date.now(),
  };
};

const receiveReviews = (reviews) => {
  return {
    type: 'RECEIVE_REVIEWS',
    reviews,
  };
};

const fetchAggregates = product => (dispatch) => {
  dispatch(requestAggregates(product));
  fetch(`http://127.0.0.1:3004/reviewsummary/${product}`)
    .then((data, err) => {
      if (err) console.log('An error occurred.', err);
      return data.json();
    }).then(json => dispatch(receiveAggregates(json[0])));
};

const fetchReviews = product => (dispatch) => {
  dispatch(requestReviews(product));
  fetch(`http://127.0.0.1:3004/reviews/${product}`)
    .then((data, err) => {
      if (err) console.log('An error occurred.', err);
      return data.json();
    }).then(json => dispatch(receiveReviews(json)));
};

// const Filters = {
//   SHOW_ALL: 'SHOW_ALL',
//   TOP_RATED: 'TOP_RATED',
//   MOST_RECENT: 'MOST_RECENT',
//   ALL_REVIEWERS: 'ALL_REVIEWERS',
//   VERIFIED_ONLY: 'VERIFIED_ONLY',
//   FIVE_STAR: 'FIVE_STAR',
//   FOUR_STAR: 'FOUR_STAR',
//   THREE_STAR: 'THREE_STAR',
//   TWO_STAR: 'TWO_STAR',
//   ONE_STAR: 'ONE_STAR',
//   POSITIVE: 'POSITIVE',
//   CRITICAL: 'CRITICAL',
//   REQUIRE_IMAGE: 'REQUIRE_IMAGE',
// };

// const filter = filter => ({
//   type: 'SET_FILTER',
//   filter,
// });

// const search = query => ({
//   type: 'SET_QUERY',
//   query,
// });

export {
  // refreshProduct,
  selectProduct,
  requestAggregates,
  receiveAggregates,
  fetchAggregates,
  requestReviews,
  // receiveReviews,
  fetchReviews,
  // Filters,
  // filter,
  // search,
};
