// SnackbarComponent.js
import React from 'react';
import { useSnackbar } from 'notistack';
import Button from '@mui/material/Button';

const SnackbarComponent = ({ title, message, variant }) => {
  const { enqueueSnackbar } = useSnackbar();

  const displaySnackbar = () => {
    enqueueSnackbar(
      <div>
        <strong>{title}</strong>
        <div>{message}</div>
      </div>,
      {
        variant: variant, // 'success' or 'error'
        autoHideDuration: 3000,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
        ContentProps: {
          sx: {
            backgroundColor: '#1e1e1f',
            color: variant === 'success' ? '#04d2f7' : '#ff0000',
            border: `1px solid ${variant === 'success' ? '#04d2f7' : '#ff0000'}`,
          },
        },
        action: (
          <Button color="secondary" size="small">
            Dismiss
          </Button>
        ),
      }
    );
  };

  return (
    <Button onClick={displaySnackbar} variant="contained">
      Show Snackbar
    </Button>
  );
};

export default SnackbarComponent;
