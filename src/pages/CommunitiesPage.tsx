import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import { CommunityWidget } from '../components/CommunitiesPage/CommunityWidget';
import { NewCommunityWidget } from '../components/CommunitiesPage/NewCommunityWidget';

const styles = {
  paper: {
    padding: 8,
    textAlign: "center",
  } as CSSProperties,
  root: {
    flexGrow: 1,
    margin: 8,
    marginTop: 16,
  },
};

class CommunitiesPageClass extends React.Component<{ classes: any }, {}> {

  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container={true} spacing={8}>
          <Grid item={true} xs={6}>
            <CommunityWidget communityID={0} />
          </Grid>
          <Grid item={true} xs={6}>
            <CommunityWidget communityID={1} />
          </Grid>
          <Grid item={true} xs={6}>
            <NewCommunityWidget />
          </Grid>
        </Grid>
      </div>
    );
  }

};

export const CommunitiesPage = withStyles(styles)(CommunitiesPageClass);
