import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import { CommunityWidget } from '../components/CommunitiesPage/CommunityWidget';
import { NewCommunityWidget } from '../components/CommunitiesPage/NewCommunityWidget';
import { IStoreState } from '../types';
import { connect } from 'react-redux';

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
interface IOwnProps {
  classes?: any;
}
type Props =  IOwnProps & IStoreState


const mapStateToProps = (state: IStoreState, ownProps: Props) => {
  return (
    {
      ...state
    }
  )
}





class CommunitiesPageClass extends React.Component<Props, {}> {

  public render() {
    const { classes, communities } = this.props;
    const communityWidgets = [];
    for (let i = 0; i < communities.length; i++) {
      communityWidgets.push((
        <Grid item={true} xs={6}>

      <CommunityWidget communityID={i} />
      </Grid>

      ));
    }
    return (
      <div className={classes.root}>
        <Grid container={true} spacing={8}>
          {communityWidgets}
          <Grid item={true} xs={6}>
            <NewCommunityWidget />
          </Grid>
        </Grid>
      </div>
    );
  }

};

export const CommunitiesPage = connect<IStoreState, {}, IOwnProps>(mapStateToProps)(withStyles(styles)(CommunitiesPageClass));
