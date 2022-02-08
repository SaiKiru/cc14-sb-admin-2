// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: [
      "Trees",
      "Investments",
      "Taxes",
      "Advertisements",
      "Operations"
    ],
    datasets: [{
      data: [
        35,
        29,
        24,
        9,
        3
      ],
      backgroundColor: [
        '#00c194',
        '#d3da31',
        '#406d83',
        '#14a7ab',
        '#84e6e5'
      ],
      hoverBackgroundColor: [
        '#45dfbb',
        '#e5e972',
        '#628ba1',
        '#43d3d8',
        '#c4faf9'
      ],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#4a4a4a",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 60,
  },
});
