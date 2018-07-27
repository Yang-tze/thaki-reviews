import { combineReducers } from 'redux';
import {
//   refreshProduct,
  selectProduct,
  requestAggregates,
  receiveAggregates,
  requestReviews,
  receiveReviews,
//   Filters,
//   filter,
//   search,
} from './actions.jsx';

const product = (state = null, action) => {
  switch (action.type) {
    case 'SELECT_PRODUCT':
      if (!action.product) {
        return state;
      }
      return action.product;
    default:
      return state;
  }
};

const aggregates = (
  state = {
    isFetching: false,
    // refresh: false,
  },
  action
) => {
  switch (action.type) {
    // case 'REFRESH_PRODUCT':
    //   return Object.assign({}, state, { refresh: true });
    case 'REQUEST_AGGREGATES':
      return Object.assign({}, state, {
        isFetching: true,
        // refresh: false
      });
    case 'RECEIVE_AGGREGATES':
      if (!action.aggregates) {
        return state;
      }
      return Object.assign({}, state, action.aggregates, {
        isFetching: false,
        // refresh: false,
        // lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
};

const reviews = (
  state = {
    isFetching: false,
    // refresh: false,
    reviews: [],
    images: [],
  },
  action
) => {
  switch (action.type) {
    // case 'REFRESH_PRODUCT':
    //   return Object.assign({}, state, { refresh: true });
    case 'REQUEST_REVIEWS':
      return Object.assign({}, state, {
        isFetching: true,
        // refresh: false,
      });
    case 'RECEIVE_REVIEWS':
      return Object.assign({}, state, action.reviews, {
        isFetching: false,
        // refresh: false,
        // lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
};

// const reviewsByProduct = (state = {}, action) => {
//   switch (action.type) {
//     case REFRESH_PRODUCT:
//     case RECEIVE_REVIEWS:
//     case RECEIVE_AGGREGATES:
//     case REQUEST_POSTS:
//     case REQUEST_AGGREGATES:
//       return Object.assign({}, state, {
//         [action.productId]: reviews(state[action.productId], action)
//       })
//     default:
//       return state
//   }
// }

// const load = (state = '', action) => {
//   switch (action.type) {
//     case 'LOAD_PRODUCT':
//       return state.map(product => action.id)
//     default:
//       return state
//   }
// }

// const filter = (state = Filters.SHOW_ALL, action) => {
//   switch (action.type) {
//     case 'SET_FILTER':
//       return action.filter
//     default:
//       return state
//   }
// }
//
// const search = (state = [], action) => {
//   switch (action.type) {
//     case 'SET_QUERY':
//       return state.map(query => action.text)
//     default:
//       return state
//   }
// }

const rootReducer = combineReducers({
  product,
  aggregates,
  reviews,
  // search
});

export default rootReducer;
