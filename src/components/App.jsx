class App extends React.Components {
  constructor(props) {
    super(props);
    this.state = {
      user: 'Tim',
      page: 'home',
      projects: null,
      // current: null,
      // upcoming: null,
      feed: null
    };
    const apiUrl = null;
  }


  componentDidMount() {
    // Sends a GET/ to server to populate feed
    var projectHandler = function(data) {
      this.setState({projects: data});
    };
    var feedHandler = function(data) {
      this.setState({feed: data});
    };

    if (this.state.user === null) {
      // Redirect to login/signup
      $.ajax({
        method: GET,
        url: '/login'
      });
    }

    $.ajax({
      method: GET,
      url: apiUrl + '/users/' + this.state.user + '/productions',
      success: projectHandler.bind(this)
    });
    if (this.state.current !== null) {
      $.ajax({
        method: GET,
        url: apiUrl + '/productions/' + this.state.current + '/feed',
        success: feedHandler.bind(this)
      });
    }
  }

  render() {
    return (
      <div>
        <Nav/>
        <Home user={this.state.user}/>
      </div>
    );
  }
}

window.App = App;