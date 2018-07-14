import React from 'react'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { toast } from 'react-toastify';
import '../css/App.css'

class PlayerAdd extends React.Component {
  state = {
    id: null,
    firstname: '',
    lastname: '',
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChangeFirstname = (e) => {
    this.setState({firstname: e.target.value});
  }

  handleChangeLastname = (e) => {
    this.setState({lastname: e.target.value});
  }

  submit = () => {
    if (!this.state.firstname.trim() || !this.state.lastname.trim()) {
      toast.error("Please fill all fields!");
      return
    }
    toast.success("Player added!");
    this.props.AddPlayer(this.state.firstname, this.state.lastname)
    this.clearForm();
    this.handleClose();

  }

  clearForm = () => {
    this.setState({ id: null });
    this.setState({ firstname: '' });
    this.setState({ lastname: '' });
  }

  render() {
    const { firstname, lastname } = this.state
    return (
      <div>
        <Button onClick={this.handleClickOpen} variant="contained" color="primary">Add player</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Adding new player</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill following form to add new Player
            </DialogContentText>
            <div className="Margin">
              <FormControl fullWidth>
                <InputLabel>Firstname</InputLabel>
                <Input onChange={this.handleChangeFirstname} value={firstname} />
              </FormControl>
            </div>
            <div className="Margin">
            <FormControl fullWidth>
              <InputLabel>Lastname</InputLabel>
              <Input onChange={this.handleChangeLastname} value={lastname} />
            </FormControl>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.submit} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default PlayerAdd
