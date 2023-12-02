import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const MKInputRoot = styled(TextField)(({ theme, ownerState }) => {
  const { palette, functions } = theme;
  const { error, success, disabled } = ownerState;

  const { grey, transparent, error: colorError, success: colorSuccess } = palette;
  const { pxToRem } = functions;

  // styles for the input with error={true}
  const errorStyles = () => ({
    backgroundImage: '/error-badge.svg',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: `right ${pxToRem(12)} center`,
    backgroundSize: `${pxToRem(16)} ${pxToRem(16)}`,

    '& .Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline, &:after': {
        borderColor: colorError.main,
      },
    },

    '& .MuiInputLabel-root.Mui-focused': {
      color: colorError.main,
    },
  });

  // styles for the input with success={true}
  const successStyles = () => ({
    backgroundImage: '/checkmark.svg',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: `right ${pxToRem(12)} center`,
    backgroundSize: `${pxToRem(16)} ${pxToRem(16)}`,

    '& .Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline, &:after': {
        borderColor: colorSuccess.main,
      },
    },

    '& .MuiInputLabel-root.Mui-focused': {
      color: colorSuccess.main,
    },
  });

  return {
    backgroundColor: disabled ? `${grey[200]} !important` : transparent.main,
    pointerEvents: disabled ? 'none' : 'auto',
    ...(error && errorStyles()),
    ...(success && successStyles()),
  };
});

const MKInput = forwardRef(({ error, success, disabled, ...rest }, ref) => (
  <MKInputRoot {...rest} ref={ref} ownerState={{ error, success, disabled }} />
));

// Setting default values for the props of MKInput
MKInput.defaultProps = {
  error: false,
  success: false,
  disabled: false,
};

// Typechecking props for the MKInput
MKInput.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default MKInput;
