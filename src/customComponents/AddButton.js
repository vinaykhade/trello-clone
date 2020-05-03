import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import propTypes from 'prop-types';

const CustomAddButton = withStyles({
  root: {
    backgroundColor: '#db4c3f',
    textTransform: 'capitalize',
    borderColor: '#db4c3f',
    color: '#fff',
    display: 'inline-block',
    verticalAlign: 'middle',
    fontSize: 13,
    fontWeight: 700,
    padding: '4px 10px',
    '&:hover': {
      backgroundColor: '#db4c3f',
      color: '#fff',
      boxShadow: 'none',
    },
    '&:disabled': {
      backgroundColor: '#db4c3f',
      color: '#fff',
      opacity: 0.4,
    },
  },
})(Button);

const AddButton = props => {
  const { disabled, onClick, name, style } = props;
  return (
    <CustomAddButton
      disabled={disabled}
      style={style}
      variant="outlined"
      size="small"
      onClick={event => onClick(event)}
    >
      {name}
    </CustomAddButton>
  );
};

AddButton.defaultProp = {
  disabled: false,
  onClick: () => {},
  name: 'Add',
  style: null,
};

AddButton.propTypes = {
  disabled: propTypes.bool,
  onClick: propTypes.func,
  name: propTypes.string,
  style: propTypes.object,
};

export default AddButton;
