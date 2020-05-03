export const ADD_NEW_TASK = 'ADD_NEW_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const UPDATE_STAGES_ORDER = 'UPDATE_STAGES_ORDER';

export const addNewTask = payload => ({
    type: ADD_NEW_TASK,
    payload,
  });
  
export const updateTask = payload => ({
    type: UPDATE_TASK,
    payload,
});

export const updateStagesOrder = payload => ({
    type: UPDATE_STAGES_ORDER,
    payload,
});