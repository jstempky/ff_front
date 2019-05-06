import sets from '../apis/sets';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_SET ,
  FETCH_SETS,
  FETCH_SET,
  DELETE_SET,
  EDIT_SET
  } from './types';


  export const createSet = formValues => async dispatch => {
    const response = await sets.post('/sets', formValues);

    dispatch({ type: CREATE_SET, payload: response.data });

  };

  export const fetchSets = () => async dispatch => {
    const response = await sets.get('/sets');

    dispatch({ type: FETCH_SETS, payload: response.data });
  };


  export const fetchSet = (id) => async dispatch => {
    const response = await sets.get(`/sets/${id}`);

    dispatch({ type: FETCH_SET, payload: response.data})
  }

  export const deleteSet = (id) => async dispatch => {
    await sets.delete(`/sets/${id}`);

    dispatch({ type: DELETE_SET, payload: id })
  }

  export const editSet = (id, formValues) => async dispatch => {
    const response = await sets.patch(`/sets/${id}`, formValues);

    dispatch({ type: EDIT_SET, payload: response.data})
  }
