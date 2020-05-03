import { combineReducers } from 'redux';
import stages from './stages';
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer() {
  const rootReducer = combineReducers({
    stages,
  });

  return rootReducer;
}