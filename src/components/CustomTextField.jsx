import React from 'react';
import { withStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';

const styles = {
    root: {
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white',
          },
        },
        '& .MuiInputLabel-root': {
          color: 'white',
        },
        '& .MuiInputBase-input': {
          color: 'white',
        },
      },
};

function CustomTextField(props) {
  const { classes } = props;

  return (
    <TextField
      {...props}
      variant="outlined"
      className={classes.root}
    />
  );
}

export default withStyles(styles)(CustomTextField);
