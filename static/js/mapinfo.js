// var geocoder = require('geocoder');

var map;
var markers = [];
var preconditionsMet = 0;
var preconditionsRequired = 2;

function meetPrecondition() {
	preconditionsMet++;
	if (preconditionsMet >= preconditionsRequired) {
		initUI();
	}
}

function initUI() {
	$("body").on("submit", "#input_form", function(e) {
		e.preventDefault();
		// Get the query from the input field
		var loc = $("#text_input").val();

		var service = new google.maps.places.PlacesService(map);
		service.textSearch(
			{
				query: loc,
				bounds: map.getBounds()
			},
			function(results, status) {
			    if (status !== google.maps.places.PlacesServiceStatus.OK) {
			        console.error(status);
			        return;
			    }
			    // Remove previous set of markers
			    if (markers) {
					markers.forEach(function(marker) {
						marker.setMap(null);
					});
					markers = [];
				}
				// This is for zooming so you can see all the markers
				var latlngBounds = new google.maps.LatLngBounds();
				results.forEach(function(result) {
					console.log(result);
					var latlng = result.geometry.location;
					// Doing anything with maps usually requires a specific LatLng object, rather than a generic object with
					// latitude and longitude properties
					var gLatLong = new google.maps.LatLng(latlng.G, latlng.K);
					var marker = new google.maps.Marker({
						position: gLatLong,
						title: loc,
						map: map
					});
					// Open up a window when you click on a pin
					marker.addListener("click", function() {
						var infoWindow = new google.maps.InfoWindow({content: "<h3>"+result.name+"</h3><p>"+result.formatted_address+"</p>"});
						infoWindow.open(map, marker);
					});
					// Add to the markers array, so we can clear it on the next query
					markers.push(marker);
					// extend the zoom bounds
					latlngBounds.extend(gLatLong);
				});
				
				map.setCenter(latlngBounds.getCenter());
				map.fitBounds(latlngBounds);
			}
		);
	});
}

function initMap() {
	var siberia = new google.maps.LatLng(60, 105);
	var newyork = new google.maps.LatLng(40.69847032728747, -73.9514422416687);

	var options = {
		center: {lat: -34.397, lng: 150.644},
  		zoom: 13
	};

	map = new google.maps.Map(document.getElementById("mapholder"), options);

	// Try W3C Geolocation (Preferred)
	if (navigator.geolocation) {
	    browserSupportFlag = true;
	    navigator.geolocation.getCurrentPosition(function(position) {
	        initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	        map.setCenter(initialLocation);
	    }, function() {
	        handleNoGeolocation(browserSupportFlag);
	    });
	}
	// Browser doesn't support Geolocation
	else {
	    browserSupportFlag = false;
	    handleNoGeolocation(browserSupportFlag);
	}

	function handleNoGeolocation(errorFlag) {
	    if (errorFlag == true) {
	        alert("Geolocation service failed.");
	        initialLocation = newyork;
	    } else {
	        alert("Your browser doesn't support geolocation. We've placed you in Siberia.");
	        initialLocation = siberia;
	    }
	    map.setCenter(initialLocation);
	}
	// The maps script has loaded, and we've initialized our map, which is precondition #1
	meetPrecondition();
}

$(document).ready(function() {
	// The document is ready, which is precondition #2
	meetPrecondition();
});