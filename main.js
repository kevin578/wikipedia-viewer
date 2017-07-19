//https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=united


$( document ).ready(function() {
console.log("test")
});



function renderSearch(){

	var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=';

	var input = $('#searchBar').val();

	url = url + encodeURI(input);

	console.log(url);

	$.ajax({
		url: url,
		headers: {'api-user-agent': "kevinbriggs1@gmail.com"},
		success: function(data) {

		for (var i = 0; i < 10; i++) {

		var searchResults = {
			link: data[3][i],
			title: data[1][i],
			description: data[2][i]
		}

		var template = $('#template').html();
  		Mustache.parse(template);   // optional, speeds up future uses
  		var rendered = Mustache.render(template, searchResults);
  		$('body').append(rendered);
  	}
		}

	});

}