function drawChart(players, points, chart_name) {
    const wykres = new Chart(document.getElementById(chart_name), {
        type: 'bar',
        data: {
            labels: players,
            datasets: [{
                data: points,
                label: "Points",
                fill: true,    //false,
                tension: 0.3,
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Points'
            }
        },
    });

    return wykres;
}

let players = ['julian', 'radek', 'kamil', 'tomek']
let points = [5, 3, 12, 1]
let chart_name = "statistics"

drawChart(players, points, chart_name)