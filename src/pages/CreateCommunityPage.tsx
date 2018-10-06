import { withStyles } from '@material-ui/core/styles';
import * as React from 'react';
import Button from "@material-ui/core/Button/Button";
import TextField from "@material-ui/core/TextField/TextField";
import Typography from "@material-ui/core/Typography/Typography";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";

const styles = {
    textField: {
        width: 300,
        backgroundColor: 'white',
        borderRadius: '4px',
        margin: '20px',
    },
    input: {
        color: 'white'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap' as 'wrap',
        justifyContent: 'center',
    },
};

class CreateCommunityPageClass extends React.Component<{ classes: any }, {}> {

    public render() {
        const { classes } = this.props;

        return (

            <div className={classes.container}>
                <SimpleDialogDemo />
                <TextField
                    id="filled-name"
                    label="Community Name"
                    className={classes.textField}
                    margin="normal"
                    variant="filled"
                />
                <Button variant="contained" color="primary">
                    Create
                </Button>
            </div>
        );
    }

}

export const CreateCommunityPage = withStyles(styles)(CreateCommunityPageClass);

// OLAOLAOLA

const emails = ['username@gmail.com', 'user02@gmail.com'];
const styles2 = {
};

class SimpleDialog extends React.Component<ISimpleDialog, {}> {
    handleClose = () => {
        this.props.onClose(this.props.selectedValue);
    };

    handleListItemClick = (value : any) => {
        this.props.onClose(value);
    };

    render() {
        const { classes, onClose, selectedValue, ...other } = this.props;

        return (<Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
            <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
            <div>
                <List>
                    {emails.map(email => (
                        <ListItem button onClick={() => this.handleListItemClick(email)} key={email}>

                            <ListItemText primary={email}/>
                        </ListItem>
                    ))}
                    <ListItem button onClick={() => this.handleListItemClick('addAccount')}>
                        <ListItemText primary="add account"/>
                    </ListItem>
                </List>
            </div>
        </Dialog>);
    }
}

interface ISimpleDialog {
    classes: object,
    onClose: any,
    selectedValue: string,
    open : any,
}

const SimpleDialogWrapped = withStyles(styles2)(SimpleDialog);


class SimpleDialogDemo extends React.Component {
    state = {
        open: false,
        selectedValue: emails[1],
    };

    handleClickOpen = () => {
        this.setState({
            open: true,
        });
    };

    handleClose = (value : any) => {
        this.setState({ selectedValue: value, open: false });
    };

    render() {
        return (
            <div>
                <Typography variant="subheading">Selected: {this.state.selectedValue}</Typography>
                <br />
                <Button variant="contained" color="secondary"  onClick={this.handleClickOpen}>Open simple dialog</Button>
                <SimpleDialogWrapped
                    selectedValue={this.state.selectedValue}
                    open={this.state.open}
                    onClose={this.handleClose}
                />
            </div>
        );
    }
}