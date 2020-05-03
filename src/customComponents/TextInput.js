import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import propTypes from 'prop-types';

const InputTextField = withStyles({
  root: {
    '& .MuiInputBase-input': {
      padding: '5px 15px',
      height: '30px',
    },
    width: '100%',
    marginBottom: 20,
  },
})(TextField);

const TextInput = props => {
  const { onChange, onEnter, value, label } = props;
  return (
    <InputTextField
      variant="outlined"
      color="secondary"
      value={value}
      autoFocus
      label={label}
      InputLabelProps={{
        shrink: true,
      }}
      onKeyDown={event => (event.keyCode === 13 ? onEnter(event) : null)}
      onChange={event => onChange(event.target.value)}
    />
  );
};

export default TextInput;

TextInput.defaultProp = {
  value: new Date(),
  onChange: () => {},
  onEnter: () => {},
  label: '',
};

TextInput.propTypes = {
  value: propTypes.object,
  onChange: propTypes.func,
  onEnter: propTypes.func,
  label: propTypes.string,
};
