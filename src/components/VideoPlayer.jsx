class VideoPlayer extends React.App {
  constructor(props) {
    super();
    this.state = {
      id: props.video.id.videoId,
      src: 'https://www.youtube.com/embed/' + id
    };
  }

  render() {
    return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={src} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{props.video.snippet.title}</h3>
        <div>{props.video.snippet.description}</div>
      </div>
    </div>
    );
  }
}

// var VideoPlayer = (props) => {
//   var id = props.video.id.videoId;
//   var src = 'https://www.youtube.com/embed/' + id;

//   return (
//   <div className="video-player">
//     <div className="embed-responsive embed-responsive-16by9">
//       <iframe className="embed-responsive-item" src={src} allowFullScreen></iframe>
//     </div>
//     <div className="video-player-details">
//       <h3>{props.video.snippet.title}</h3>
//       <div>{props.video.snippet.description}</div>
//     </div>
//   </div>
//   );
// };

// read this article: https://facebook.github.io/react/docs/higher-order-components.html
// and this: https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoPlayer = VideoPlayer;
