import React from 'react';
import Stage from './stage';

const Stages = ({stages, addNewTask, updateTask, updateStagesOrder}) => {
    return (
        <div>
            {
                Object.keys(stages).map(stageId => {
                    return (
                        <Stage 
                            key={stageId}
                            data={stages[stageId]}
                            stages={stages}
                            stageId={stageId}
                            updateTask={updateTask}
                            addNewTask={addNewTask}
                            updateStagesOrder={updateStagesOrder}
                        />
                    )
                })
            }
        </div>
    )
}

export default Stages;