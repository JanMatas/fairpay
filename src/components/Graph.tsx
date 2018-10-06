import { createStyles, Theme, withStyles } from '@material-ui/core';
import {Chart} from 'chart.js'
import * as React from "react";
import ReactChartkick, { LineChart } from 'react-chartkick'

ReactChartkick.addAdapter(Chart)

const styles = (theme: Theme) => createStyles({
    graphContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        'background-color': '#1f364d',
        marginTop: "20px",
        marginBottom: "5px",
    }
});
export class GraphClass extends React.Component<any, any> {

    public render() {
        const { classes } = this.props;

        // const data = [];
        // let now = new Date(2018, 9, 28);
        // const oneDay = 24 * 3600 * 1000;
        // let value = Math.random() * 200;
        // for (let i = 0; i < 10; i++) {
        //     now = new Date(+now + oneDay);

        //     value = value + Math.random() * 30 - 15;
        //     data.push({
        //         name: "a",
        //         value: [
        //             [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
        //             Math.round(value)
        //         ]
        //     }
        //     )
        // }

        // const option = {
        //     xAxis: {
        //         type: 'time',
        //         splitLine: {
        //             show: false
        //         },
        //         axisLine: {
        //             lineStyle: {
        //                 color: 'rgba(0, 255, 255, 0.6)'

        //             }
        //         }
        //     },
        //     yAxis: {
        //         type: 'value',
        //         axisTick: {
        //             interval: 100
        //         },

        //     },
        //     series: [{
        //         data,
        //         type: 'line',
        //         smooth: true
        //     }],
        //     textStyle: {
        //         color: 'rgba(255, 255, 255, 0.6)'
        //     },
        //     grid: {
        //         left: 30,
        //         top: 10,
        //         right: 30,
        //         bottom: 20
        //     },
        //     labelLine: {
        //         lineStyle: {
        //             color: 'rgba(255, 255, 255, 0.3)'
        //         }
        //     },
        //     label: {
        //         textStyle: {
        //             color: 'rgba(255, 255, 255, 0.3)'
        //         }
        //     }
        // };

        return (
            <div className={classes.graphContainer}>
                <LineChart data={{"2017-01-01": 61, "2017-01-02": 55, "2017-01-03": 28, "2017-01-04": 40}}
                    height={'200px'} width={'350px'} prefix="$" color={"#ffffff"} colors={["#fff", "blue", "red"]} 
                    library={ {vAxis:{gridlines:{color:'transparent'}}}}/>
                
            </div>
        )
    }
}
export const Graph = withStyles(styles)(GraphClass);
