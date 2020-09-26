import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { FormControl, TextField, Typography, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

class LoginModal extends Component {
  state = { open: false };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    return (
      <div>
        <Button color='inherit' onClick={this.handleOpen}>
          Login
        </Button>
        <Modal
          aria-labelledby='transition-modal-title'
          aria-describedby='transition-modal-description'
          open={this.state.open}
          onClose={this.handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          className={styles.modal}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={this.state.open}>
            <div className={styles.paper}>
              <FormControl noValidate autoComplete='off'>
                <Typography style={{ color: 'black' }}>LOGIN</Typography>
                <TextField
                  id='filled-secondary'
                  label='Email Address'
                  variant='filled'
                  color='secondary'
                  style={{ color: 'white' }}
                />
                <TextField
                  id='filled-secondary'
                  label='Password'
                  variant='filled'
                  color='secondary'
                />
                <NavLink to='/'>
                  <Button size='small' color='secondary'>
                    Login
                  </Button>
                </NavLink>
              </FormControl>
            </div>
          </Fade>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
