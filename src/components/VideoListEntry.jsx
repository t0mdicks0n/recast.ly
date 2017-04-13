var VideoListEntry = (props) => {
  
  // function handleClick() {
  //   console.log('got clicked')
  // }
  // console.log(props)

  var currentVidState = props.video[1].currentVid;

  var handleClick = function (event) {
    currentVidState = props.video[0];
    // App.prototype.setState(currentVidState);
    // console.log(currentVidState);

    // console.log(this.state)
    //sets new state(next video, function () {re-render(Apps)})


    // console.log(props);
    // console.log(super.render())

    // props.clickOnListEntry();
  };

  return (
  <div className="video-list-entry">
    <div className="media-left media-middle">
      <img className="media-object" src={props.video[0].snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">

      <div onClick={handleClick} className="video-list-entry-title">{props.video[0].snippet.title}</div>
      <div className="video-list-entry-detail">{props.video[0].snippet.description}</div>
    </div>
  </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
