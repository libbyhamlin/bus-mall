const ctx = document.getElementById('chart').getContext('2d');
import { userPicksArray } from './app.js';
import { productData } from './ProductArray.js'

conts data = [{ id: 'usb',
    timesClicked: 1,
    // timesDisplayed: 2}];

onlyTImesClicked = array.forEach(data => {
    
})

const data = [12, 19, 3, 5, 2, 3];
const labelColors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange'];

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labelColors,
        datasets: [
            {
                label: '# of Votes',
                data: data,
                backgroundColor: labelColors
            }
        ]
    },
    options: {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    }
});
