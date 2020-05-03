import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import TextField from '@material-ui/core/TextField';

import propTypes from 'prop-types';
import DateInput from '../../customComponents/DateInput';
import AddButton from '../../customComponents/AddButton';
import CancelButton from '../../customComponents/CancelButton';
import TextInput from '../../customComponents/TextInput';

import * as Styled from './styles';

export const TaskInputTextField = withStyles({
  root: {
    '& .MuiInputBase-input': {
      padding: '5px 15px',
      height: '30px',
    },
    width: '100%',
    marginBottom: 20,
  },
})(TextField);

export default function AddTask({ stageId, addNewTask }) {
  const [inputEnabled, setInputStatus] = React.useState(false);
  const [taskDescription, handleTaskDescription] = React.useState('');
  const [scheduledDate, handleTaskScheduledDate] = React.useState(new Date());

  const enableTaskInput = () => {
    if (inputEnabled) {
      setInputStatus(false);
    } else {
      setInputStatus(true);
    }
  };

  const addTaskToStage = () => {
    addNewTask({
      stageId,
      description: taskDescription,
      active: true,
      scheduledDate,
    });
    handleTaskDescription('');
    handleTaskScheduledDate(new Date());
    setInputStatus(false);
  };

  const cancelTaskAddition = () => {
    handleTaskDescription('');
    handleTaskScheduledDate(new Date());
    setInputStatus(false);
  };


  return (
    <Styled.AddEditFormContainer>
      {inputEnabled ? (
        <Styled.AddEditInputContainer>
            <TextInput
              label="Task Description"
              onChange={value => handleTaskDescription(value)}
              onEnter={() => (taskDescription ? addTaskToStage() : null)}
            />
            <DateInput
              value={scheduledDate}
              onChange={value => handleTaskScheduledDate(value)}
            />

          <AddButton
            disabled={taskDescription.length === 0}
            onClick={() => addTaskToStage()}
            style={{ marginRight: '10px' }}
            name="Add Task"
          />

          <CancelButton onClick={() => cancelTaskAddition()} />
        </Styled.AddEditInputContainer>
      ) : (
        <Styled.AddTaskBtnContainer onClick={() => enableTaskInput()}>
          <AddSharpIcon
            style={{
              color: '#db4c3f',
              display: 'inline-block',
              verticalAlign: 'middle',
            }}
          />
          <Styled.AddTaskLabel>Add Task</Styled.AddTaskLabel>
        </Styled.AddTaskBtnContainer>
      )}
    </Styled.AddEditFormContainer>
  );
}

AddTask.defaultProp = {
  stageId: '',
  addNewTask: () => {},
};

AddTask.propTypes = {
  stageId: propTypes.string,
  addNewTask: propTypes.func,
};
