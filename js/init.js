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

$("#date").html(newDate.toDateString());

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

  }); // end of document ready
})(jQuery); // end of jQuery name space
