import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import * as React from 'react';
import Button from "@material-ui/core/Button/Button";
import TextField from "@material-ui/core/TextField/TextField";
import Typography from "@material-ui/core/Typography/Typography";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";


const styles = (theme: Theme) => createStyles({
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
    }
});

class CreateCommunityPageClass extends React.Component<{ classes: any }, {}> {

    public render() {
        const { classes } = this.props;

        return (

            <div className={classes.container}>
                <SimpleDialogComponent />
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

const icons = [
    '001-sun-block.png',
    '002-flip-flops.png',
    '003-ticket.png',
    '004-swimming-pool.png',
    '005-cupcake.png',
    '006-shirt.png',
    '007-invitation.png',
    '008-sun.png',
    '009-crown.png',
    '010-lemonade.png',
    '011-yatch.png',
    '012-turntable.png',
    '013-balloons.png',
    '014-eye-mask.png',
    '015-terrace.png',
    '016-garlands.png',
    '017-water-gun.png',
    '018-freezer.png',
    '019-pamela.png',
    '020-cocktail-2.png',
    '021-candy.png',
    '022-barbecue.png',
    '023-guitar.png',
    '024-sunglasses.png',
    '025-jelly.png',
    '026-beach-ball.pn',
    '027-soft-drink.png',
    '028-skewer.png',
    '029-cocktail-1.png',
    '030-starfish.png',
    '031-toast.png',
    '032-palm-tree.png',
    '033-party-blower.png',
    '034-watermelon.png',
    '035-party-hat.png',
    '036-bikini.png',
    '037-surfboard.png',
    '038-birthday-cake.png',
    '039-beer.png',
    '040-beer-can.png',
    '041-flippers.png',
    '042-snorkel.png',
    '043-orange-juice.png',
    '044-picture.png',
    '045-lifesaver.png',
    '046-ice-cream.png',
    '047-mirror-ball.png',
    '048-cocktail.png',
    '049-speakers.png',
    '050-sand-bucket.png'
];

const styles2 = {
    img: {
        width: '30px',
        height: '30px',
        padding: '3px',
        backgroundColor: '#ffffff',
        border: '6px solid #0d2236',
        'border-radius': '50%',
    },
};

class SimpleDialog extends React.Component<ISimpleDialog, {}> {
    handleClose = () => {
        this.props.onClose(this.props.selectedValue);
    };

    handleListItemClick = (value: any) => {
        this.props.onClose(value);
    };

    render() {
        const { classes, onClose, selectedValue, ...other } = this.props;

        var groups = [];
        for (var i = 0; i < icons.length; i += 2) {
            groups.push(icons.slice(i, i + 2));
        }
        let icons2 = groups;

        return (<Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
            <DialogTitle id="simple-dialog-title">Pick Icon</DialogTitle>
            <div>
                <List>
                    {icons2.map(icon => (
                        <ListItem >
                            <Button onClick={() => this.handleListItemClick(icon[0])} key={icon[0]}>
                                <img className={classes.img} src={"icons/" + icon[0]} alt="" />
                            </Button>
                            <Button onClick={() => this.handleListItemClick(icon[1])} key={icon[1]}>
                                <img className={classes.img} src={"icons/" + icon[1]} alt="" />
                            </Button>
                        </ListItem>
                    ))}
                    <ListItem button onClick={() => this.handleListItemClick('addAccount')}>
                        <ListItemText primary="add account" />
                    </ListItem>
                </List>
            </div>
        </Dialog>);
    }
}

interface ISimpleDialog {
    classes: any,
    onClose: any,
    selectedValue: string,
    open: any,
}

const SimpleDialogWrapped = withStyles(styles2)(SimpleDialog);

interface demoI {
    classes: any,
}

interface DemoS {
    open: any,
    selectedValue: any
}

class SimpleDialogDemo extends React.Component<demoI, DemoS> {
    state = {
        open: false,
        selectedValue: icons[1],
    };

    handleClickOpen = () => {
        this.setState({
            open: true,
        });
    };

    handleClose = (value: any) => {
        this.setState({ selectedValue: value, open: false });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <img className={classes.img} src={"icons/" + this.state.selectedValue} />
                <Typography variant="subheading">Selected: {this.state.selectedValue}</Typography>
                <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>Choose Icon</Button>
                <SimpleDialogWrapped
                    selectedValue={this.state.selectedValue}
                    open={this.state.open}
                    onClose={this.handleClose}
                />
            </div>
        );
    }
}

const styles3 = {
    img: {
        width: '30px',
        height: '30px',
        padding: '3px',
        backgroundColor: '#ffffff',
        border: '6px solid #0d2236',
        'border-radius': '50%',
    }
}

const SimpleDialogComponent = withStyles(styles3)(SimpleDialogDemo);
