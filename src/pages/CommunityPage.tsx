import { Typography } from '@material-ui/core';
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import CreditCard from '@material-ui/icons/CreditCard';
import Settings from '@material-ui/icons/Settings';
import * as React from 'react';
import { connect } from 'react-redux';
import { Graph } from '../components/Graph';
import { Transaction } from '../components/Transaction';
import { IStoreState } from '../types';
import { ICommunity } from '../types/ICommunity';
import { IUser } from '../types/IUser';
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
    flexDirection: "row",
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
  transactions: {

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
    "font-size": "17px",
    "font-weight": 500,
    diplay: "flex",
    flexGrow: 1,
  },
});

export interface IOwnProps {
  communityID: number;
  classes?: any;
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
      community: state.communities[1],
      currentUser: state.currentUser
    }
  )
}



export interface IState {
  redirect: boolean;
}

class CommunityPageClass extends React.Component<Props, IState> {
  public state = { redirect: false };

  public render() {
    const { classes, community } = this.props;
    const iconSrc = "icons/" + community.icon;
    const transactions = community.transactions.map(t => (<Transaction transaction={t} key={t.location + t.user + t.date} />))
    return (
      <div>
        <div className={classes.graph}>
          <Graph />
          <div className={classes.header}>
            <img className={classes.img} src={iconSrc} alt="" />
            <Typography variant="headline" component="h2" className={classes.title}>
              {community.communityName}
            </Typography>
            <CreditCard className={classes.icon} />
            <Settings className={classes.icon} />

          </div>
        </div>
        <div>
          {transactions}
        </div>
      </div>

    );
  }

};

export const CommunityPage = connect<IStateProps, {}, IOwnProps>(mapStateToProps)(withStyles(styles)(CommunityPageClass));
