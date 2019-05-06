import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import setReducer from './setReducer';
// NEED AN AUTH REDUCER


export default combineReducers({
  sets: setReducer,
  form: formReducer
});

// export default combineReducers({
//   auth: authReducer,
//   form: formReducer
// });
