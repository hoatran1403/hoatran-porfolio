
$(document).ready(function(){
  // Chart global options
  Chart.defaults.global.legend.display = false;
  Chart.defaults.global.animation.duration = 2000;
  Chart.defaults.global.tooltips.displayColors = false;

  var fullStackCtx = $('#fullStackChart');
  var fullStackChart = undefined;

  //Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href = '#myPage']").on('click',function(event){

    //make sure this.hash has a value before overriding default behaviour
    if(this.hash !== ""){

      //prevent default anchor click behaviour
      event.preventDefault();

      //store hash
      var hash = this.hash;

      // Using Jquery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of miliseconds it takes to scroll to the specified area
      $('html,body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){

        //Add hash (#) to URL when done scrolling (default click behaviour)
        window.location.hash = hash;
      });
    }
  });

  function addFullStackChart(){
    if(typeof fullStackChart === 'undefined'){
      fullStackChart = new Chart(fullStackCtx,{
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
    }

  }

  //Add animation on mouse scroll
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();

    //set slide animation
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      if(pos < winTop + 600){
        if($(this).attr('id') == 'fullStackChart') addFullStackChart();
        $(this).addClass("slide");
      }
    });

    //triger chart animation
    $(".chart").each(function(){
      var pos = $(this).offset().top;

      if(pos < winTop + 600){
        addFullStackChart();

      }
    });

  });


});
