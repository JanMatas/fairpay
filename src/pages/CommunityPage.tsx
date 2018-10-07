import { Typography } from '@material-ui/core';
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import CreditCard from '@material-ui/icons/CreditCard';
import Settings from '@material-ui/icons/Settings';
import * as React from 'react';
import { connect } from 'react-redux';
import { Graph } from '../components/Graph';
import { CreditCardModal } from '../components/CreditCardModal';
import { Transaction } from '../components/Transaction';
import { IStoreState } from '../types';
import { ICommunity } from '../types/ICommunity';
import { IUser } from '../types/IUser';
import { SettingsDialog } from '../components/SettingsModal';

const styles = (theme: Theme) => createStyles({
  root: {
    'background-color': '#1f364d',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  graph: {
    display: "flex",
    alignItems: "",
    justifyContent: "space-between",
    flexDirection: "column",
    'background-color': '#1f364d',

  },
  icon: {
    display: "flex",
    flexGrow: 0,
    color: "#ffffff",
    width: '25px',
    height: '25px',
    margin: '8px',
    marginTop: '18px',
  },
  img: {
    width: '20px',
    height: '20px',
    padding: '4px',
    backgroundColor: '#ffffff',
    border: '6px solid #0d2236',
    'border-radius': '50%',
    margin: '10px',
  },
  title: {
    paddingTop: "20px",
    color: "#ffffff",
    'font-family': "'Ubuntu', sans-serif",
    "font-size": "17px",
    "font-weight": 500,
    diplay: "flex",
    flexGrow: 1,
  },
  padTop: {
    marginTop: '10px',
  }
});

interface IOwnProps {
  communityID: number;
  classes?: any;
  match?: any;
}

interface IStateProps {
  community: ICommunity;
  currentUser: IUser;
}

type Props = IStateProps & IOwnProps


interface IState {
  openCard: boolean;
  openSettings: boolean;
}



export const mapStateToProps = (state: IStoreState, ownProps: Props) => {
  return (
    {
      community: state.communities[ownProps.match.params.id],
      currentUser: state.currentUser
    }
  )
}




class CommunityPageClass extends React.Component<Props, IState> {
  public handleClickOpenCard = () => {
    this.setState({
      ...this.state,
      openCard: true,
    });
  };

  public handleCloseCard = () => {
    this.setState({ ...this.state, openCard: false });
  };

  public handleClickOpenSettings = () => {
    this.setState({
      ...this.state,
      openSettings: true,
    });
  };

  public handleCloseSettings = () => {
    this.setState({ ...this.state, openSettings: false });
  };

  public state = { openCard: false, openSettings: false };

  public render() {
    const { classes, community } = this.props;
    const iconSrc = "icons/" + community.icon;
    const transactions = community.transactions.map(t => (<Transaction transaction={t} key={t.location + t.user + t.date} />));
    return (
      <div>
        <div className={classes.graph}>
          <Graph />
          <div className={classes.header}>
            <img className={classes.img} src={iconSrc} alt="" />
            <Typography variant="headline" component="h2" className={classes.title}>
              {community.communityName}
            </Typography>
            <CreditCard onClick={this.handleClickOpenCard} className={classes.icon} />
            <Settings onClick={this.handleClickOpenSettings} className={classes.icon} />

          </div>
        </div>
        <CreditCardModal
          open={this.state.openCard}
          onClose={this.handleCloseCard}
        />
        <SettingsDialog
          community={this.props.community}
          open={this.state.openSettings}
          onClose={this.handleCloseSettings}
        />
        <div className={classes.padTop}>
          {transactions}
        </div>
      </div>

    );
  }

};

export const CommunityPage = connect<IStateProps, {}, IOwnProps>(mapStateToProps)(withStyles(styles)(CommunityPageClass));
