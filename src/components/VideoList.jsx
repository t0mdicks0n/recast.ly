var VideoList = (props) => {

  var handleClick = function(event) {
    console.log(props);
  };





  return (
  <div onClick={handleClick} className="video-list media">
    {props.videos[0].map(video =>
      <VideoListEntry video = {[video, props.videos[1]]}/>
    )}
  </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
