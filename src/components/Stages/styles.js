import styled from 'styled-components';


export const StageContainer = styled.div`
  padding: 20px;
  width: 33.30%;
  display: inline-block;
  vertical-align: top;
`;

export const StageBlock = styled.div`
    padding: 20px;
    border: 1px solid #eaeaea;
    border-radius: 4px;
`;

export const AddEditFormContainer = styled.form`
  position: relative;
`;

export const AddTaskBtnContainer = styled.div`
  display: ${props => (props.inputEnabled ? 'none' : 'block')};
  cursor: pointer;
`;

export const ProjectTitle = styled.h2`
  margin: 0 0 10px 2px;
  font-size: 20px;
`;

export const AddTaskLabel = styled.span`
  display: inline-block;
  vertical-align: middle;
  color: grey;
  font-size: 16px;
  margin-left: 10px;

  ${AddTaskBtnContainer}:hover & {
    color: #db4c3f;
  }
`;

export const AddEditInputContainer = styled.div``;

export const TaskListContainer = styled.ul`
  padding-left: 0;
  margin: 0 0 20px;
`;

export const TaskListItem = styled.li`
  position: relative;
  cursor: pointer;
  padding: 10px;
  list-style-type: none;
  border-bottom: 1px solid #eaeaea;
  border-radius: 2px;
  &:hover {
    background: #fafafa;
  }
`;

export const DragIcon = styled.div`
  position: absolute;
  top: 10px;
  left: -22px;
  visibility: hidden;
  ${TaskListItem}:hover & {
    visibility: visible;
  }
`;

export const TaskDescription = styled.p`
  font-size: 14px;
  margin: 0 0 0 10px;
  word-break: break-all;
`;

export const TaskDetails = styled.div`
  display: inline-block;
  vertical-align: top;
  width: calc(100% - 84px);
`;

export const TaskActionsList = styled.div`
  display: inline-block;
  vertical-align: top;
  visibility: hidden;
  ${TaskListItem}:hover & {
    visibility: visible;
  }
`;

export const CheckCircle = styled.span`
    position: relative;
    height: 18px;
    width: 18px;
    display: inline-block;
    vertical-align: middle;
    border-radius: 50%;
    border: 1px solid ${props => (props.disabled ? '#db4c3f' : 'grey')};
    cursor: pointer;
    background:  ${props => (props.disabled ? '#db4c3f' : '#fff')}
    pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
    &:hover {
        background: #eaeaea;
        &:after {
            visibility: visible;
        }
    }
    &:after {
        visibility: ${props => (props.disabled ? 'visible' : 'hidden')} ;
        content: '';
        width: 9px;
        height: 4px;
        position: absolute;
        top: 50%;
        margin-top: -3px;
        left: 50%;
        margin-left: -4px;
        border: 2px solid ${props => (props.disabled ? '#fff' : 'grey')};
        border-top: none;
        border-right: none;
        transform: rotate(-45deg);
    }      
`;
