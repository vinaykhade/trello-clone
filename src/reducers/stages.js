import initialState from './initialState';

import * as stageTaskActions from '../actions/stageTasks';

const reducer = (state = initialState.stages, action) => {
  switch (action.type) {

    case stageTaskActions.ADD_NEW_TASK: {
        const {
          stageId,
          description,
          active,
          scheduledDate,
        } = action.payload;
  
        return {
          ...state,
          [stageId]: {
            ...state[stageId],
            ...{
              tasks: state[stageId].tasks.concat({
                description,
                scheduledDate,
                active,
              }),
            },
          },
        };
    }

    case stageTaskActions.UPDATE_TASK: {
        const { stageId, list } = action.payload;
  
        return {
          ...state,
          [stageId]: {
            ...state[stageId],
            ...{ tasks: [...list] },
          },
        };
    }

    case stageTaskActions.UPDATE_STAGES_ORDER: {
        const stages = action.payload;
        return {
          ...state,
          ...stages,
        };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
