(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });

// CLOCK
    // Create a newDate() object
var newDate = new Date();

$("#date").html(newDate.toLocaleDateString('id',{weekday:'short', year:'numeric', month:'short', day:'numeric'}));

setInterval( function() {
	// Create a newDate() object and extract the seconds of the current time on the visitor's
	var seconds = new Date().getSeconds();
	// Añadiendo 0 para doble digito.
	$("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
	},1000);

setInterval( function() {
	// Obteniendo minutos de la fecha
	var minutes = new Date().getMinutes();
	// Añadiendo 0 para doble digito.
	$("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
    },1000);

setInterval( function() {
	// Create a newDate() object and extract the hours of the current time on the visitor's
	var hours = new Date().getHours();
	// Add a leading zero to the hours value
	$("#hours").html(( hours < 10 ? "0" : "" ) + hours);
    }, 1000);

    /* Preloader */

      setTimeout(function(){
          jQuery('body').addClass('loaded');
          jQuery('h1').css('color','#222222');
      }, 3000);

  }); // end of document ready
})(jQuery); // end of jQuery name space

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-79927112-2', 'auto');
  ga('send', 'pageview');
