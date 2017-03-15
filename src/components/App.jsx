class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'Tim',
      page: 'home',
      projects: null,
      // current: null,
      // upcoming: null,
      feed: null,
      updates: null
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
      $.ajax({<div>
        <div></div>
      </div>
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
        <Nav user={this.state.user} />
        <ProductionSidebar projects={this.state.projects} />
        <Home user={this.state.user} />
        <Feed updates={this.state.updates} />
      </div>
    );
  }
}

window.App = App;