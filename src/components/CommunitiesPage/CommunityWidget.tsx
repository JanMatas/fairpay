import { LinearProgress } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { IStoreState } from '../../types';
import { ICommunity } from '../../types/ICommunity';
import { IUser } from '../../types/IUser';

const styles = (theme: Theme) => createStyles({

  card: {
    'background-color': '#1f364d',
    height: '180px',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    'margin-top': '10px',
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
    width: '40px',
    height: '40px',
    padding: '8px',
    backgroundColor: '#ffffff',
    border: '6px solid #0d2236',
    'border-radius': '50%',
  },
  footer: {
    height: '30px',
    'background-color': '#193048',
  },
  footerImg: {
    'width': '20px',
    'margin-top': '6px',
    'margin': '2px',
    'border-radius': '50%',
  },
  progress: {
    width: "140px",
    height: "3px",
    color: "#9ab3cc",
    "background-color": "#a9c1d7",
    'border-radius': '2px',

  },
  spending: {
    "font-size": "11px",
    color: "#a9c1d7"
  }


});

export interface IOwnProps {
  communityID: number;
  classes?: any;
  picture?: string;
}

interface IStateProps {
  community: ICommunity;
  currentUser: IUser;
}

type Props = IStateProps & IOwnProps


export interface IState {
  redirect: boolean;
}



export const mapStateToProps = (state: IStoreState, ownProps: Props) => {
  return (
    {
      community: state.communities[ownProps.communityID],
      currentUser: state.currentUser
    }
  )

}

class CommunityWidgetClass extends React.Component<Props, IState> {
  public state = { redirect: false };

  public handleOnClick = () => {
    this.setState({ redirect: true });
  };

  public render() {
    const pictureSrc = "icons/" + this.props.picture;
    const { classes, community, communityID } = this.props;
    if (this.state.redirect) {
      return <Redirect push={true} to={`/community/${communityID}`} />;
    }

    const iconSrc = "icons/" + community.icon;
    const userAvatars = community.members.map(m => {
      const fileName = `users/${m.username}.jpg`
      return (<img className={classes.footerImg} src={fileName} key={m.username} alt="" />)
    });
    return (
      <Card className={classes.card} onClick={this.handleOnClick}>
        <div className={classes.content}>
          <img className={classes.img} src={iconSrc} alt="" />
          <Typography variant="headline" component="h2" className={classes.title}>
            {community.communityName}
          </Typography>
          <p className={classes.spending}>{`${community.spending}€ / ${community.budget}€`}</p>

          <LinearProgress className={classes.progress} variant="determinate" value={community.spending / community.budget * 100} />

        </div>
        <div className={classes.footer}>
          {userAvatars}
        </div>

      </Card>

    );
  }

};

export const CommunityWidget = connect<IStateProps, {}, IOwnProps>(mapStateToProps)(withStyles(styles)(CommunityWidgetClass));


