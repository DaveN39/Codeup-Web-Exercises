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

        var resturants = [
    	{
        resturant: "BJs Resturant & Brewhouse.",
        type: "American",
        features: ["Extensive menu.", "Local Brewery.", "Open until midnight."],
    	},
        {
        resturant: "El Bucanero.",
        type: "Seafood",
        features: ["Fresh seafood.", "Mexican Ingridients.", "Family Atmosphere."],
    	},
    	{
        resturant: "Mimi's Cafe",
        type: "French",
        features: ["Authentic French Cuisine.", "All Day Breakfast.", "Located at The Rim."],
    	},
		];
		console.log("Here are all the features of all the resturants:");
			resturants.forEach(function(resturant) {
    		resturant.features.forEach(function(feature) {
        console.log(feature);
    });
});
       
        // Render the map
        var map1 = new google.maps.Map(document.getElementById("map-canvas1"), mapOptions1);
        var map2 = new google.maps.Map(document.getElementById("map-canvas2"), mapOptions2);
        var map3 = new google.maps.Map(document.getElementById("map-canvas3"), mapOptions3);


		// Set our address to geocode
		var address = "5447 W Loop 1604 N, San Antonio, TX 78253";
		// var address2 = "16505 Blanco Rd, San Antonio, TX 78232";
		// var address3 = "17315 Interstate 10 Frontage Rd, San Antonio, TX 78257";

// 		// Init geocoder object
		var geocoder = new google.maps.Geocoder();

// 		// Geocode our address
		geocoder.geocode({ "address": address }, function(results, status) {

		var bjs = { lat: 29.490026, lng: -98.707964};
		var elBucanero = { lat: 29.591821, lng: -98.5145347};
		var mimis = { lat: 29.60534, lng: -98.6021937};

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
		var marker4 = new google.maps.Marker({
    				position: elBucanero,
    				map: map1
    		});
		var marker5 = new google.maps.Marker({
    				position: mimis,
    				map: map1
    		});

		var infowindow1 = new google.maps.InfoWindow({
    	content: "<h1>BJs Resturant & Brewhouse.</h1>"
  		});
		marker1.addListener('click', function() {
    	infowindow1.open(map3, marker1);
  		});
  		var infowindow2 = new google.maps.InfoWindow({
    	content: "<h1>BJs Resturant & Brewhouse.</h1>"
  		});
		marker3.addListener('click', function() {
    	infowindow2.open(map1, marker3);
  		});
  		var infowindow3 = new google.maps.InfoWindow({
    	content: "<h1>El Bucanero.</h1>"
  		});
		marker4.addListener('click', function() {
    	infowindow3.open(map1, marker4);
  		});
  		var infowindow4 = new google.maps.InfoWindow({
    	content: "<h1>Mimi's Cafe.</h1>"
  		});
		marker5.addListener('click', function() {
    	infowindow4.open(map1, marker5);
  		});
  		var infowindow6 = new google.maps.InfoWindow({
    	content: "<h1>BJs Resturant & Brewhouse.</h1>"
  		});
		marker2.addListener('click', function() {
    	infowindow1.open(map2, marker2);
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