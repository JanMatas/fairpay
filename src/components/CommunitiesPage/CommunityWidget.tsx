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
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  card: {
    'background-color': '#1f364d',
    height: '160px',
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
    maxWidth: '20px',
    'margin-top': '6px',
    'margin': '2px',
    'border-radius': '50%',
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
    const { classes } = this.props;
    const pictureSrc = "icons/" + this.props.picture;
    if (this.state.redirect) {
      return <Redirect push={true} to="/community/1/" />;
    }
    return (

      <Card className={classes.card} onClick={this.handleOnClick}>
        <div className={classes.content}>
          <img className={classes.img} src={pictureSrc} alt="" />


          <Typography variant="headline" component="h2" className={classes.title}>
            Roomies
        </Typography>

        </div>
        <div className={classes.footer}>
          <img className={classes.footerImg} src="users/jano.jpg" alt="" />
          <img className={classes.footerImg} src="users/andrej.jpg" alt="" />
          <img className={classes.footerImg} src="users/filip.jpg" alt="" />
          <img className={classes.footerImg} src="users/matej.jpg" alt="" />
        </div>

      </Card>

    );
  }

};

export const CommunityWidget = connect<IStateProps, {}, IOwnProps>(mapStateToProps)(withStyles(styles)(CommunityWidgetClass));


