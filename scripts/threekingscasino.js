// JavaScript Document



$(document).ready(function() {
	
	$("#chooseGame").accordion({
		collapsible: true,
		active: false
	});
	
	$("#gameChoice img").hover(function() 
	{
	$( this ).css("opacity", .8);
	},
	function()
	{
	$( this ).css( "opacity", 1);
	}
  );
	
});

// Help messages
$(function() {
    $(document).tooltip();
});

// Slider for money
$(function() {
    $( "#amountSlider" ).slider({
      range: "max",
      min: 5,
      max: 5000,
      value: 2,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
      }
    });
    $( "#amount" ).val( $( "#amountSlider" ).slider( "value" ) );
});