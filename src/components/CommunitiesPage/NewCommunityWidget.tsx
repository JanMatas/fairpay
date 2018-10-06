import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AddCircle from '@material-ui/icons/AddCircle';

import * as React from 'react';
import { Redirect } from 'react-router';

const styles = (theme: Theme) => createStyles({

  card: {
    height: '150px',
    minWidth: '150px',
  },
  icon: {
    fontSize: 50,
    margin: theme.spacing.unit * 2,
  },

  root: {
    alignItems: 'flex-end',
    display: 'flex',
    justifyContent: 'center',
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
      <CardContent>
      <AddCircle className={classes.icon}/>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
      </CardContent>
  
    </Card>

    );
  }

};

export const NewCommunityWidget = withStyles(styles)(NewCommunityWidgetClass);


