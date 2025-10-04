/** @odoo-module */

import { Component, onWillStart, useRef, useState, onMounted } from "@odoo/owl";
import { loadJS } from "@web/core/assets";

export class ChartRenderer extends Component {
    setup() {
        this.chartRef = useRef("chart")
        this.state = useState({
            type: this.props.type,
            title: this.props.title,
        })
        onWillStart(async () => {
            await loadJS("https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.5.0/chart.umd.min.js");
        })

        onMounted(() => {
            this.render();
        })
    }
    render() {
        // const data = [
        //     { year: 2010, count: 10 },
        //     { year: 2011, count: 20 },
        //     { year: 2012, count: 15 },
        //     { year: 2013, count: 25 },
        //     { year: 2014, count: 22 },
        //     { year: 2015, count: 30 },
        //     { year: 2016, count: 28 },
        // ];
        // return new Chart(this.chartRef.el, {
        //     type: 'polarArea',
        //     data: {
        //         labels: data.map(row => row.year),
        //         datasets: [{
        //             label: 'Acquisitions by year',
        //             data: data.map(row => row.count)
        //         }]
        //     }
        // })
        const data = {
            labels: [
                'Red',
                'Green',
                'Yellow',
                'Grey',
                'Blue'
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [11, 16, 7, 3, 14],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(75, 192, 192)',
                    'rgb(255, 205, 86)',
                    'rgb(201, 203, 207)',
                    'rgb(54, 162, 235)'
                    ]
                }]
        };

        return new Chart(this.chartRef.el, {
            type: this.state.type,
            data: data,
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: this.state.title,
                        position: 'bottom',
                    }
                }                
            }
        })
    }
}

ChartRenderer.template = "dashboard_extended.ChartRenderer";
