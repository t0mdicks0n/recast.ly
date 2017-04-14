var searchYouTube = (options, callback) => {
	var appServer = 'https://www.googleapis.com/youtube/v3/search'

	// $.ajax({
	// 		type: 'GET',
	//     url: appServer,
	//     dataType: 'json',
	//     data: {maxResults: 5},
	//     success: function (data) {
	//     	console.log(data);
	//     },
	//     error: function (data) {
	//       console.error('youtube: Failed to send message', data);
	//     }
	//   });

	var params = {
		part: 'snippet',
		key: options.key,
		max: options.max,
		q: options.query,
		type: 'video',
		videoEmbeddable: true,
	};

	$.getJSON(appServer, params, function (data) {
		data.items.forEach(function(element, index, array) {
			callback(element);
		});
	});
};

searchYouTube({key:'AIzaSyDQpUvp8t-cGuBAvNUrRVYlkVYZfCS5KT0', max:5, query:'Tom'}, function(item) {
	console.log(item);
});

// function getRequest(searchTerm) {
//     var params = {
//         part: 'snippet',
//         key: 'AIzaSyDQpUvp8t-cGuBAvNUrRVYlkVYZfCS5KT0',
//         max:
//         q: searchTerm
//     };
  
//     $.getJSON('https://www.googleapis.com/youtube/v3/search', params, function (searchTerm) {
//         console.log(searchTerm);
//     });
// }

window.searchYouTube = searchYouTube;


