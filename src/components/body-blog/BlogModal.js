import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        What category best describes your story?
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            What category best describes your story?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Gender
          </Button>
          <Button onClick={handleClose} color="primary">
            Sex
          </Button>
          <Button onClick={handleClose} color="primary">
            Sexuality
          </Button>
          <br />
          <Button onClick={handleClose} color="primary">
            Body
          </Button>
          <Button onClick={handleClose} color="primary">
            Menstruation
          </Button>
          <Button onClick={handleClose} color="primary">
            Health
          </Button>
          <Button onClick={handleClose} color="primary">
            Transgender
          </Button>
          <Button onClick={handleClose} color="primary">
            LGBTQ
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
