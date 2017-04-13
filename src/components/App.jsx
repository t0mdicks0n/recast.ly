class App extends React.Component {
  
  constructor () {
    super();
    this.state = {
      videos: window.exampleVideoData,
      currentVid: window.exampleVideoData[2]
    };
  

  // var handleClick = function (event) {
  //   console.log('hello');
  //   // console.log(event.target);
  //   // console.log(super.render())

  //   // props.clickOnListEntry();
  // };
    
  }


  render () {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video = {this.state.currentVid}/>
        </div>
        <div className="col-md-5">
          <VideoList videos = {[this.state.videos, this.state]}/>
        </div>
      </div>
    );
  }
  
}

// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video = {window.exampleVideoData[2]}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videos = {window.exampleVideoData}/>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;