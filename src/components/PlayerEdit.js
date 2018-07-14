import React from 'react'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { toast } from 'react-toastify';
import '../css/App.css'

class PlayerEdit extends React.Component {
  state = {
    id: null,
    firstname: '',
    lastname: '',
    open: false
  };

  componentDidUpdate(nextProps){
    if(this.state.id === nextProps.id) return
    this.setState({
          id: nextProps.id,
          firstname: nextProps.firstname,
          lastname: nextProps.lastname
    })
  }

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
    const { id, firstname, lastname } = this.state
    const { EditPlayer } = this.props

    if (!firstname.trim() || !lastname.trim()) {
      toast.error("Please fill all fields!");
      return
    }
    toast.success("Player updated!");
    EditPlayer(id, firstname, lastname)

    this.handleClose();
  }

  render() {
    var { firstname, lastname, open } = this.state

    return (
      <span>
        <IconButton color="primary" onClick={this.handleClickOpen}>
          <EditIcon  />
        </IconButton>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Editing player</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill following form to edit Player
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
      </span>
    );
  }
}

export default PlayerEdit
