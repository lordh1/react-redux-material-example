import React from 'react'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import { toast } from 'react-toastify';
import '../css/App.css'

class PlayerRemove extends React.Component {
  state = {
    open: false,
    id: null
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  submit = () => {
    const { playerId, RemovePlayer } = this.props
    RemovePlayer(playerId)
    toast.warning("Player removed!")
    this.handleClose();
  }

  render() {
    return (
      <span>
        <IconButton color="secondary" onClick={this.handleClickOpen}>
          <DeleteIcon />
        </IconButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Removing player</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure You want to remove player?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              No
            </Button>
            <Button onClick={this.submit} color="secondary">
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </span>
    )
  }
}

export default PlayerRemove
