function search() {
	var str = document.getElementById("searchBarContent").value;
	var newstr = str.replace(/ /g, "+");
	window.location.href = "https://duckduckgo.com/?q=" + newstr + "&t=hg%ia=web";
}
function handle(e) {
	if(e.keyCode === 13) {
		search();
	}
}