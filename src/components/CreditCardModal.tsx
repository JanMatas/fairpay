import blue from '@material-ui/core/colors/blue';
import { withStyles } from '@material-ui/core/styles';
import * as React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'
import { Modal } from '@material-ui/core';

const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  dialog: {
    marginTop:"60px",
    backgroundColor: "rgba(76, 175, 80, 0.0)",
  }
};

interface IProps  {
    onClose: any,
    open: boolean,
    classes?: any

}
class SimpleDialog extends React.Component<IProps, {}> {
  handleClose = () => {
    this.props.onClose();
  };

  handleListItemClick = (value: any) => {
    this.props.onClose(value);
  };

  render() {
    const { classes, onClose, ...other } = this.props;

    return (
      <Modal className={classes.dialog} onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <div>
                <Cards
                
                number={4401290135728441}
                name={"MR J MATAS"}
                expiry={"09/21"}
                cvc={"153"}
                focused={"number"}
              />
        </div>
      </Modal>
    );
  }
}


export const CreditCardModal = withStyles(styles)(SimpleDialog);