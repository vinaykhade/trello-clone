import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import propTypes from 'prop-types';

export const CustomCancelButton = withStyles({
  root: {
    fontWeight: 700,
    fontSize: 13,
    padding: '4px 10px',
    textTransform: 'capitalize',
    background: '#f3f3f3',
    border: '1px solid #ddd',
    color: '#202020',
    display: 'inline-block',
    verticalAlign: 'middle',
  },
})(Button);

const CancelButton = props => {
  const { onClick } = props;
  return (
    <CustomCancelButton onClick={event => onClick(event)}>
      Cancel
    </CustomCancelButton>
  );
};

CancelButton.defaultProp = {
  onClick: () => {},
};

CancelButton.propTypes = {
  onClick: propTypes.func,
};

export default CancelButton;
