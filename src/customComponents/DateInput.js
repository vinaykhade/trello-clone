import React from 'react';

import DateFnsUtils from '@date-io/date-fns';
import { withStyles } from '@material-ui/core/styles';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import propTypes from 'prop-types';

const InputDateField = withStyles({
  root: {
    '& .MuiInputBase-input': {
      padding: '5px 15px',
      height: '30px',
    },
    width: '100%',
    margin: '-1px 0 20px -2px',
    borderLeft: 'none',
  },
})(KeyboardDatePicker);

const DatePicker = ({ value, onChange }) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <InputDateField
      disableToolbar
      color="secondary"
      variant="outlined"
      label="Scheduled Date"
      inputVariant="outlined"
      format="do MMM yy"
      margin="normal"
    //   InputLabelProps={{
    //     shrink: true,
    //   }}
      value={value}
      onChange={val => onChange(val)}
      KeyboardButtonProps={{
        'aria-label': 'change date',
      }}
    />
  </MuiPickersUtilsProvider>
);

export default DatePicker;

DatePicker.defaultProp = {
  value: new Date(),
  onChange: () => {},
};

DatePicker.propTypes = {
  value: propTypes.object,
  onChange: propTypes.func,
};
