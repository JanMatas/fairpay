import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { ITransaction } from '../types/ITransaction';

const styles = (theme: Theme) => createStyles({
  root: {

        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        borderBottom : '1px solid #1f364d',
        margin: '0px 20px'
  },

  img: {
    margin: '15px',
    width: '35px',
    height: '35px',
    'border-radius': '50%',
  },
  title: {
    margin: '24px 10px',
    color: "#ffffff",
    "font-size": "15px",
    "font-weight": 400,
    diplay: "flex",
    flexGrow: 1,
  },
  sum: {
    margin: '24px',
    display: "flex",
    flexGrow: 0,
    "font-weight": 600,
    fontSize: '16px',
    color: "#ffffff",
  }
});

export interface IProps {
    transaction: ITransaction;
    classes?: any;
  }

export interface IState {
  redirect: boolean;
}

class TransactionClass extends React.Component<IProps, IState> {


  public render () {
    const { classes, transaction } = this.props;
    const fileName = `users/${transaction.user.username}.jpg`
    return (
        <div className={classes.root}>
            <img className={classes.img} src={fileName} alt="" />
            <Typography variant="headline" component="h2" className={classes.title}>
            {transaction.location}
            </Typography>
            
            <Typography variant="headline" component="h2" className={classes.sum}>
            {`${transaction.value} €`}
            </Typography>
      </div>

    );
  }

};

export const Transaction = withStyles(styles)(TransactionClass);


