import React, { Component } from 'react';
import Chart from './Chart';

class Dashboard extends Component {
    render() {
        return (
            <div className="row">
                {this.props.charts && 
                   this.props.charts.map((chart, index) => {
                       return (
                           <div className="col-xs-12 col-sm-6 mb-2" key={index}>
                               <Chart
                                 data={chart.serie}
                                 userConfig={this.props.userConfig}
                                 titleName={chart.title}
                               />
                           </div>
                       );
                   })}
            </div>
        );
    }
}
export default Dashboard;