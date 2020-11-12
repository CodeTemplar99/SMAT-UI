var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
type: 'pie',
data: {
labels: ["Number of new users", "Videos sent in the last 24hrs", "Videos sent this month"],
datasets: [{
data: [550, 2424, 14040], // Specify the data values arr
borderColor: ['#2196f38c', '#f443368c', '#0096889'],
backgroundColor: ['#2196f38c', '#f443368c', '#009'],
borderWidth: 1 // Specify bar border width
}]},
options: {
responsive: true, // Instruct chart js to respond nicely.
maintainAspectRatio: false, // Add to prevent default behaviour of f
}
});