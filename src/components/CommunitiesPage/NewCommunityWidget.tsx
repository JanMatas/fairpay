import Card from '@material-ui/core/Card';
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { Redirect } from 'react-router';
import "./icons.css"

const styles = (theme: Theme) => createStyles({
  card: {
    'background-color': '#1f364d',
    height: '180px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  pos: {
    marginBottom: 12,
  },
  title: {
    color: "#ffffff",
    "font-size": "17px",
    "font-weight": 500
  },
  img: {
    fontSize:'80px',
    width: '80px',
    height: '80px',
    margin: '5px',
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#c5deea+0,8abbd7+31,066dab+100;Web+2.0+Blue+3D+%231 */
background: "linear-gradient(to bottom, #c5deea 0%,#8abbd7 31%,#066dab 100%", /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

  },
  largeIcon: {
    width: 60,
    height: 60,
  },
});



export interface IProps {
  classes?: any;
}

export interface IState {
  redirect: boolean;
}

class NewCommunityWidgetClass extends React.Component<IProps, IState> {
  public state = { redirect: false };

  public handleOnClick = () => {
    this.setState({redirect: true});
  }

  public render () {
    const { classes } = this.props;
    if (this.state.redirect) {
      return <Redirect push={true} to="/community/1/" />;
    }
    return (
      <Card className={classes.card} onClick={this.handleOnClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">  
      <defs>
        <linearGradient id="Gradient-1"
             x1="0" y1="0" x2="100%" y2="0">
            <stop offset="0%" stop-color="#36d1dc" />
            <stop offset="100%" stop-color="#5b86e5" />
        </linearGradient>
    </defs>
  <path fill="url(#Gradient-1)" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
  
  </svg>
      <Typography variant="headline" component="h2" className={classes.title}>
            Add collection
          </Typography>
  
    </Card>

    );
  }

};

export const NewCommunityWidget = withStyles(styles)(NewCommunityWidgetClass);


