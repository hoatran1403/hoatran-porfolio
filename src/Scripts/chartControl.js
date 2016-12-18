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
});
