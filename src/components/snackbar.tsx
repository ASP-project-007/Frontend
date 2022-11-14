import React, { useContext } from 'react'; 
import Snackbar, {SnackbarProps, SnackbarOrigin} from '@material-ui/core/Snackbar';
import { SnackBarContext } from 'contexts/snackbar/snackbar.context';
import Alert, { AlertProps, Color } from '@material-ui/lab/Alert';
import { SnackBarProps } from 'contexts/snackbar/snackbar.provider';



export function prepareSnackBarProperites(message: string, snackBarDispatch, severity: Color = 'success', autoHideDuration = 1500): SnackBarProps {
    const snackbarProperties: SnackbarProps = {
        message: message,
        open: true,
        anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
        },
        
        autoHideDuration: autoHideDuration,
        key: new Date().toString(),
        onClose: () => { snackBarDispatch({...snackbarProperties, open: false }); }
    }

    const alertProperties: AlertProps = {
      severity: severity
    }

    return {
      snackbarProps: snackbarProperties,
      alertProps: alertProperties
    };
}
  
export function CustomSnackbar({ snackbarProps, alertProps }: SnackBarProps) {
  
  return (
    <div>  

      <Snackbar style={  { zIndex: 9999999 } } {...snackbarProps}>
        <Alert variant="filled" {...alertProps} style={{minWidth: '200px'}}>
          {snackbarProps ? snackbarProps.message: null}
        </Alert>
      </Snackbar>
    </div>
  );
}