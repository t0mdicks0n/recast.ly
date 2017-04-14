var searchYouTube = (options, callback) => {
  var appServer = 'https://www.googleapis.com/youtube/v3/search';

  // $.ajax({
  //    type: 'GET',
  //     url: appServer,
  //     dataType: 'json',
  //     data: {maxResults: 5},
  //     success: function (data) {
  //      console.log(data);
  //     },
  //     error: function (data) {
  //       console.error('youtube: Failed to send message', data);
  //     }
  //   });

  var params = {
    part: 'snippet',
    type: 'video',
    videoEmbeddable: true,
    key: options.key,
    maxResults: options.max,
    q: options.query,
  };

  $.getJSON(appServer, params, function (data) {
    callback(data.items);
  });
};

// searchYouTube({key:'AIzaSyDQpUvp8t-cGuBAvNUrRVYlkVYZfCS5KT0', max:1, query:'Tom'}, function(item) {
//   console.log(item);
// });

window.searchYouTube = searchYouTube;


