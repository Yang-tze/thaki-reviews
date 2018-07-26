import { combineReducers } from 'redux';
import {
  Filters,
  filter,
  search,
} from './actions';
​
const filter = (state = Filters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state
  }
}
​
const search = (state = [], action) => {
  switch (action.type) {
    case 'SET_QUERY':
      return state.map(query => action.text)
    default:
      return state
  }
}
​
export default combineReducers({
  filter,
  search
});
