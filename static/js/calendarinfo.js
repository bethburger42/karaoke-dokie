$(document).ready(function() {
	$('#calendar').datepicker({
	    // inline: true,
	    // firstDay: 1,
	    showOtherMonths: true,
	    appendText:"(yy-mm-dd)",
	    dateFormat: "yy-mm-dd",
	    // dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
	    onSelect: function (dateText, inst) {
	    	console.log(dateText);
	    }
	});
});
