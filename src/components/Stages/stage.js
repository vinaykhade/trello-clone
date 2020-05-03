import React from 'react';
import AddTask from './addTask';
import TasksList from './tasksList';

import * as Styled from './styles';


const Stage = ({ data, stageId, stages, addNewTask, updateTask, updateStagesOrder }) => {
    const [editable, editingTaskCurrently] = React.useState('');

    return (
        <Styled.StageContainer>
            <Styled.StageBlock>
            <Styled.ProjectTitle>{data.stage_name}</Styled.ProjectTitle>
            <TasksList 
                list={data.tasks} 
                stages={stages}
                stageId={stageId}
                updateTask={updateTask}
                updateStagesOrder={updateStagesOrder}
                editingTaskCurrently={editingTaskCurrently}
            />
            {!editable && (
                <AddTask
                    stageId={stageId}
                    addNewTask={addNewTask}
                />
            )}
            </Styled.StageBlock>
        </Styled.StageContainer>  
    )
}

export default Stage;