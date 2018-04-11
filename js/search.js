function search() {
	var searchQuery = document.getElementById("searchterm").value;
	var searchURI = "https://duckduckgo.com/?kae=d&kam=osm&kaq=-1&kp=-2&kap=-1&kw=n&ks=m&kao=-1&kax=-1&k1=-1&kaj=m&k5=1&kak=-1&kad=en_GB&kt=Roboto&kd=1&q=" + searchQuery;
	window.location = searchURI;
}

document.getElementById("searchterm") .addEventListener("keyup", function(event) {
	event.preventDefault();
	if(event.keyCode == 13) {
		docuemtn.getElementById("searchBtn").click();
	}
})
var searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", search);

// Made by Incrested
// Licensed under GNU General Public License (version 3)
// https://github.com/Incrested/EzTab
//
//
// Developement Re-Started on the 10th of April, 2018.
