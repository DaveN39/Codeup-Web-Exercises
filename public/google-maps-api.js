"use strict";
(function () {

	var mapElement
 		// Set our map options
        var mapOptions1 = {
            // Set the zoom level
            zoom: 5,

            // This sets the center of the map at our location
            center: {
                lat:  29.490026,
                lng: -98.707964
            }
        };
        var mapOptions2 = {
            // Set the zoom level
            zoom: 15,

            // This sets the center of the map at our location
            center: {
                lat:  29.490026,
                lng: -98.707964
            }
        };
        var mapOptions3 = {
            // Set the zoom level
            zoom: 20,

            // This sets the center of the map at our location
            // center: {
            //     lat:  29.490026,
            //     lng: -98.707964
            // }
        };
        // Render the map
        var map1 = new google.maps.Map(document.getElementById("map-canvas1"), mapOptions1);
        var map2 = new google.maps.Map(document.getElementById("map-canvas2"), mapOptions2);
        var map3 = new google.maps.Map(document.getElementById("map-canvas3"), mapOptions3);


		// Set our address to geocode
		var address = "5447 W Loop 1604 N, San Antonio, TX 78253";

// 		// Init geocoder object
		var geocoder = new google.maps.Geocoder();

// 		// Geocode our address
		geocoder.geocode({ "address": address }, function(results, status) {

		var bjs = { lat: 29.490026, lng: -98.707964};

		var marker1 = new google.maps.Marker({
    				position: bjs,
    				animation: google.maps.Animation.DROP,
    				map: map1
			});
		var marker2 = new google.maps.Marker({
    				position: bjs,
    				animation: google.maps.Animation.DROP,
    				map: map2
    		});
			marker2.addListener('click', toggleBounce);
			function toggleBounce() {
  				if (marker2.getAnimation() !== null) {
    				marker2.setAnimation(null);
  				} else {
    				marker2.setAnimation(google.maps.Animation.BOUNCE);
  				}
			}
		var marker3 = new google.maps.Marker({
    				position: bjs,
    				map: map3
    		});
		var infowindow = new google.maps.InfoWindow({
    	content: "<h1> BJs Resturant & Brew Pub.</h1>"
  		});
		marker3.addListener('click', function() {
    	infowindow.open(map3, marker3);
  		});
  		
		
		console.log("Geocoding finished!");
		console.log(results, status);

//    		// Check for a successful result
   		if (status == google.maps.GeocoderStatus.OK) {

//        // Recenter the map over the address
       	map3.setCenter(results[0].geometry.location);
   
   		} 
   		else {
// 		// Show an error message with the status if our request fails
       	alert("Geocoding was not successful - STATUS: " + status);
   		}
		});
		console.log("this code comes after geocoding request!");

})();