$(document).ready(function() {
	$('#calendar').datepicker({
	    showOtherMonths: true,
	    appendText:"(yy-mm-dd)",
	    dateFormat: "yy-mm-dd",
	    onSelect: function (dateText, inst) {
	    	console.log(dateText);
	    }
	}).datepicker('setDate', new Date());
});
