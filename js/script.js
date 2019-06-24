"use strict";

document.getElementById('js-navbar-toggle').addEventListener('click', function(){
    document.getElementById('mySidebar').classList.toggle('visible');
});

var ctx = document.getElementById('myChart').getContext('2d');

var chart = new chart(ctx, {
    //1
    type: 'bar',
    data: {
        // 2
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        // 3
        datasets: [{
            // 4
            label: "Singups",
            // 5
            bakcgroundcolor: '#8DBEC8',
            borderColor: '#*DBEC8',
            // 6
            data: [52, 51, 41, 94, 26, 6 ,72, 9, 32, 88],

        },
    {
        label: "FTD",
        backgroundColor: '#F29E4E',
        borderColor: '#F29E4E',
        data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
    },
{
    label: "Earned",
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
            // 7
            hidden: true,
}]
    },
});