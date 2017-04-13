class App extends React.Component {
  
  constructor () {
    super();
    this.state = {
      videos: window.exampleVideoData,
      currentVid: window.exampleVideoData[2]
    };
    this.handleClick = this.handleClick.bind(this); 
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