import React, { Component } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RRPropTypes from 'react-router-prop-types';
import styles from './styles.module.css';
import Logo from '../images/milfitLogo.png';
import LoginModal from '../login';

class Header extends Component {
  state = { LoggedIn: false };

  logUserOut = () => {
    const { logout, history } = this.props;
    logout();
    history.push('/');
  };

  render() {
    const { LoggedIn } = this.props;
    return (
      <AppBar
        position='fixed'
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: '#1e1e1e'
        }}
      >
        <NavLink to='/'>
          <img
            src={Logo}
            alt='logo'
            style={{ width: '35px', marginRight: '1em' }}
          />
        </NavLink>
        <IconButton>
          <NavLink to='/' className={styles.header__link}>
            Home
          </NavLink>
        </IconButton>
        <IconButton>
          <NavLink to='/exercises' className={styles.header__link}>
            Exercises
          </NavLink>
        </IconButton>
        <IconButton>
          <NavLink to='/blogs' className={styles.header__link}>
            Blog
          </NavLink>
        </IconButton>
        <IconButton>
          <NavLink to='/profile' className={styles.header__link}>
            Profile
          </NavLink>
        </IconButton>

        {this.state.loggedIn && (
          <>
            <button
              type='button'
              onClick={this.logUserOut}
              className={styles.header__link}
            >
              logout
            </button>
          </>
        )}

        {!this.state.loggedIn && (
          <>
            <p to='/login' className={styles.header__link}>
              <LoginModal />
            </p>
            <p to='/forms/signup' className={styles.header__link}>
              SignUp
            </p>
          </>
        )}
      </AppBar>
    );
  }
}

Header.propTypes = {
  loggedIn: PropTypes.bool,
  logout: PropTypes.func.isRequired,
  history: RRPropTypes.history.isRequired
};

Header.defaultProps = {
  loggedIn: false
};

export default Header;
