var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
type: 'pie',
data: {
labels: ["Tokyo", "Mumbai", "Mexico City", "Shanghai"],
datasets: [{
data: [500, 50, 2424, 14040], // Specify the data values arr
borderColor: ['#2196f38c', '#f443368c', '#3f51b570', '#0096889'],
backgroundColor: ['#2196f38c', '#f443368c', '#3f51b570', '#009'],
borderWidth: 1 // Specify bar border width
}]},
options: {
responsive: true, // Instruct chart js to respond nicely.
maintainAspectRatio: false, // Add to prevent default behaviour of f
}
});