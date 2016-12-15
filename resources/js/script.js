
var myCenter = new google.maps.LatLng(41.878114,-87.629798);
function initialize(){
  var mapProp = {
    center: myCenter,
    zoom:12,
    scrollwheel:false,
    draggable: false,
    myTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

  var marker = new google.maps.Marker({
    position: myCenter,
  });
  marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function(){

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

  //Add animation on mouse scroll
  $(window).scroll(function(){
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if(pos < winTop + 600){
        $(this).addClass("slide")
      }

    });

  });

});
