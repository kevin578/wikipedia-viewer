//https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=united


$( document ).ready(function() {
console.log("test")
});



function renderSearch(){

	var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';

	var input = $('#searchBar').val();

	url = url + encodeURI(input);

	console.log(url);

}