var VideoList = (props) => {

  var handleClick = function(event) {
    // return props;
  };

  // var fixedVidInput = function () {
  //   //debugger;
  //   // check if the input is an object
  //     // if true, make it so that it looks the way we want it formated
  //     // we want props = [window.exampleVideoData, window.exampleVideoData[2]]

  //     console.log(props)

  //   if (props.videos.length !== 2) {
  //     // props = {props.videos, props.videos[0]};
  //     props = {videos: [ props.videos, {currentVid: props.videos[0], videos: props.videos}] };
  //   }
  // }

  // fixedVidInput();

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
