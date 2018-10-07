import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import * as React from 'react';
import { Redirect } from 'react-router';
 
const styles = {
  grow: {
    flexGrow: 1,
  },
  root: {
    flexGrow: 1,
    borderBottom: '1px solid #517ba5'
  },
  hue: {
    color:'white',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },

  appbar: {
    backgroundColor: "#0E2439"
  }
};


class MenuAppBar extends React.Component<{classes : any}, {}> {
  public state = {
    anchorEl: null,
    auth: true,
    redirect: false,
  };

  public handleChange = (event : any) => {
    this.setState({ auth: event.target.checked });
  };

  public handleMenu = (event : any) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  public handleClose = () => {
    this.setState({ anchorEl: null });
  };

  public onLogoClick = () => {
    this.setState({...this.state, redirect: true})
  }

  public render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    if (this.state.redirect) {
      this.setState({...this.state, redirect: false})
      
      return <Redirect push={true} to={`/`} />;
    }
    return (
      
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton> */}
            <Typography variant="title" color="inherit" onClick={this.onLogoClick} className={classes.grow}>
               FairPay
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    horizontal: 'right',
                    vertical: 'top',
                  }}
                  transformOrigin={{
                    horizontal: 'right',

                    vertical: 'top',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}



export default withStyles(styles)(MenuAppBar);