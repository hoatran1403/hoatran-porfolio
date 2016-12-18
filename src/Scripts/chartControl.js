$(document).ready(function(){
  // Chart global options
  Chart.defaults.global.legend.display = false;


  var fullStackCtx = $('#fullStackChart');
  var fullStackChart = new Chart(fullStackCtx,{
    type:'pie',
    data: {
      labels:['Back End', 'Front End'],
      datasets:[{
        data:[40,60],
        backgroundColor: [
          "rgba(0,0,0,.5)",
          "rgba(0,0,0,.85)"
        ],
        hoverBackgroundColor:[
          "rgba(0,0,0,.7)",
          "rgba(0,0,0,1)"
        ]
      }]
    }

  });

  var backEndCtx = $('#backEndChart');
  var backEndChart = new Chart(backEndCtx, {
    type: 'bar',
    data:{
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 18, 3, 5, 2, 3],
        backgroundColor:[
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)'
        ]
      }]
    },
    options:{
      legend:{
        display:false
      },
      scales:{
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  })


});
