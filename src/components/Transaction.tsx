import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { ITransaction } from '../types/ITransaction';

const styles = (theme: Theme) => createStyles({
  root: {

    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    margin: '0px 15px',
    fontFamily : '"Open Sans"'
  },
  img: {
    margin: '10px',
    width: '35px',
    height: '35px',
    'border-radius': '50%',
      border: '1px solid #ececec'
  },
  title: {
    margin: '9px 10px',
    color: "#ececec",
    "font-size": "15px",
    "font-weight": 500,
    flexGrow: 1,
  },
  sum: {
    margin: '16px 10px',
    display: "flex",
    flexGrow: 0,
    "font-weight": 300,
    fontSize: '14px',
    color: "#d4d4d4",
  },
    date: {
      display : 'flex',
        fontSize : '10px',
        "font-weight": 300,
        color: "#3a4c5f",
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
    const fileName = `users/${transaction.user.username}.jpg`;
    return (
        <div className={classes.root}>
            <img className={classes.img} src={fileName} alt="" />
            <Typography variant="headline" component="h2" className={classes.title}>
            {transaction.location}
            <span className={classes.date}>
                {new Date(transaction.date).toDateString()}
            </span>
            </Typography>
            
            <Typography variant="headline" component="h2" className={classes.sum}>
            {`- €${transaction.value}`}
            </Typography>
      </div>

    );
  }

};

export const Transaction = withStyles(styles)(TransactionClass);


