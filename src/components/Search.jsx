var Search = (props) => {

  var handleChange = function (event) {
    this.props.state.input = event.target.value;
    // this.props.test = event.target.value;
    // console.log(props.test);
    // this.setState({value: event.target.value});
  };

  return (
    <div className="search-bar form-inline">
      <input onChange={handleChange} className="form-control" type="text" />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
