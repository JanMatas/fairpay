import blue from '@material-ui/core/colors/blue';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import * as React from 'react';
import 'react-credit-cards/es/styles-compiled.css'
import { DialogTitle, Dialog, DialogContent, DialogActions, Button, FormControl, FormLabel, FormGroup, FormControlLabel, Switch } from '@material-ui/core';
import Slider from '@material-ui/lab/Slider';
import { ICommunity } from '../types/ICommunity';
import * as _ from 'lodash';

const styles =(theme: Theme) => createStyles( {
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },

  sectionHeader: {
    marginTop: "20px",
  },
    sliderGroup: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    number: {
        display: "flex",
        flexGrow: 0,
        marginLeft: "5px",
        width:'20px'
    },
    img: {
        flexGrow: 0,
        flexShrink: 0,

        margin: '5px',
        width: '28px',
        height: '28px',
        'border-radius': '50%',
      },
});

interface IStateProps {
    community: ICommunity;
  }
  interface IOwnProps {
    onClose: any,
    open: boolean,
    classes?: any
}
  type Props = IStateProps & IOwnProps
  



interface IState {
    value: number;
    switchVal: boolean;
    names: {[name : string]: number};
};

class SimpleDialog extends React.Component<Props, IState> {
    public state = {
        value: 60,
        switchVal: true,
        names: _.fromPairs(this.props.community.members.map(m => [m.username, 50]))
    }
    handleClose = () => {
        this.props.onClose();
    };

    handleListItemClick = (value: any) => {
        this.props.onClose(value);
    };

    handleChangeSwitch = ( event: any) => {
        this.setState({...this.state, switchVal: event.target.checked });
    };

    handleChangeSlider = (__: any, value: number) => {
        this.setState({...this.state, value });
    };

    handleChangeSplit = (n:string) => (__: any, value: number) => {
        console.log(n, value)
        let newNames = Object.assign({}, this.state.names);
        newNames[n] = value;
        this.setState({...this.state, names: newNames });
    };


    render() {
        const { classes, community } = this.props;
        const splitSliders = community.members.map(m => {
        const fileName = `users/${m.username}.jpg`
            const portion = this.state.names[m.username] / _.sum(_.values(this.state.names)) * 100 ;
            return (
            <div className={classes.sliderGroup} key={m.username}>
                <img className={classes.img} src={fileName} alt="" />
                <Slider onChange={this.handleChangeSplit(m.username)} value={this.state.names[m.username]}/>
                <span className={classes.number}>{`${Math.floor(portion)}%`}</span>
            </div>)
        });
        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Community Settings</DialogTitle>
                    <DialogContent>
                        <FormControl component="fieldset">
                            <FormLabel className={classes.sectionHeader} component="legend">Splits</FormLabel>
                                {splitSliders}
                            <FormLabel className={classes.sectionHeader} component="legend">Geolocation guard</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={this.state.switchVal}
                                            onChange={this.handleChangeSwitch}
                                        />
                                    }
                                    label="Enable payments only in my presence"
                                />
                            </FormGroup>
                            <FormLabel className={classes.sectionHeader} component="legend">Maximum monthly amount</FormLabel>
                            <div className={classes.sliderGroup}>
                                <Slider onChange={this.handleChangeSlider} value={this.state.value}/>
                                <span className={classes.number}>{`${Math.floor(this.state.value)}€`}</span>
                                
                            </div> 
                        </FormControl>

                       
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
            </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Subscribe
            </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export const SettingsDialog = withStyles(styles)(SimpleDialog);