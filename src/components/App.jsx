class App extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {
      videos: [],
      currentVid: exampleVideoData[0]
    };
    this.handleClick = this.handleClick.bind(this); 
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    var vids;
    
    this.props.search({key: window.YOUTUBE_API_KEY, max: this.props.max, query: this.props.query}, function(item) {
      vids = item;
    });

    var yalla = this;
    
    var set = function () {
      yalla.setState({
        videos: vids,
        currentVid: vids[0]
      });
    };

    setTimeout(set, 1000);
  } 

  handleClick (event) {
    this.setState(this.state.currentVid);
  }

  render () {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video = {this.state.currentVid}/>
        </div>
        <div onClick={this.handleClick} className="col-md-5">
          <VideoList videos = {this.state.videos} state = {this.state}/>
        </div>
      </div>
    );
  }
  
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;