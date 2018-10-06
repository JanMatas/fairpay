import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import * as React from 'react';

const styles = {
  paper: {
    padding:  8,
    textAlign: "center",
  } as CSSProperties,
  root: {
    flexGrow: 1,
    margin: 16,
    marginTop: 26,
  },
};

class CommunitiesPageClass extends React.Component<{classes : any}, {}> {
  
  public render () {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container={true} spacing={16}>
          <Grid item={true} xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item={true} xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }

};

export const CommunitiesPage =  withStyles(styles)(CommunitiesPageClass);
