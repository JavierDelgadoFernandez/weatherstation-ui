/**
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import {
    createFragmentContainer,
    graphql
} from "react-relay";
import Chart from "chart.js";
import React from "react";

const colors = {
    blue: "rgb(54, 162, 235)",
    gray: "rgb(201, 203, 207)",
    red: "rgb(255, 99, 132)",
}

const chartConfiguration = {
    data: {
        datasets: [
            {
                backgroundColor: colors.red,
                borderColor: colors.red,
                data: [],
                fill: false,
                label: "Temperature (°C)",
                yAxisID: "temperature-axis",
            },
            {
                backgroundColor: colors.blue,
                borderColor: colors.blue,
                data: [],
                fill: false,
                label: "Humidity (%)",
                yAxisID: "humidity-axis",
            },
            {
                data: [],
                backgroundColor: colors.gray,
                borderColor: colors.gray,
                fill: false,
                label: "Pressure (hPa)",
                yAxisID: "pressure-axis",
            },
        ],
    },
    options: {
        responsive: true,
        scales: {
            xAxes: [
                {type: "time"},
            ],
            yAxes: [
                {
                    id: "temperature-axis",
                    ticks: {callback: (value) => `${Math.round(value*10)/10} °C`},
                    type: "linear",
                },
                {
                    gridLines: {drawOnChartArea: false},
                    id: "humidity-axis",
                    ticks: {callback: (value) => `${Math.round(value*10)/10} %`},
                    type: "linear",
                },
                {
                    gridLines: {drawOnChartArea: false},
                    id: "pressure-axis",
                    ticks: {callback: (value) => `${Math.round(value)} hPa`},
                    type: "linear",
                },
            ],
        },
        tooltips: {
            callbacks: {title: (point) => new Date(point[0].xLabel)},
            mode: "index",
        },
    },
    type: "line",
}

class ControlMeasureChart extends React.Component {
    componentDidMount() {
        const ctx = this.refChart.getContext("2d");
        this.chart = new Chart(ctx, chartConfiguration);
        this.updateChart(this.props.data);
    }
    updateChart(measures) {
        chartConfiguration.data.datasets[0].data = measures.map(
            m => ({x: m.epoch, y: m.temperature}));
        chartConfiguration.data.datasets[1].data = measures.map(
            m => ({x: m.epoch, y: m.humidity}));
        chartConfiguration.data.datasets[2].data = measures.map(
            m => ({x: m.epoch, y: m.pressure/100}));
        this.chart.update();
    }
    render() {
        return <canvas ref={chart => this.refChart = chart} />;
    }
}

export default createFragmentContainer(
    ControlMeasureChart,
    graphql`
        fragment ControlMeasureChart on Measure @relay(plural: true) {
            epoch
            temperature
            humidity
            pressure
        }`,
)
