import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Trend = (props) => {
    const series = props.data ? props.data.series : null,
          categories = props.data ? props.data.categories : null;

    const options = {
        chart: {
            type: 'line',
            height: 241,
        },

        title: {
            text: undefined
        },
        
        credits: {
            enabled: false
        },

        annotations: [{
            labels: [{ 
                point: 'open1',
                text: 'test'
            }]
        }],

        xAxis: {
            categories: categories
        },

        yAxis: {
            y: 0

        },

        legend: {
            enabled: false
        },

        series: series
    };

    return (
        <div className="bg-white">
            <div className="mt-3 border-bottom">
                <h5>{props && props.title}</h5>
            </div>
            <div>
            <HighchartsReact 
              highcharts={Highcharts}
              options={options}
            />
            </div>
        </div>
    )
}

export default Trend; 