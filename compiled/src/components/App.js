'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      user: 'Tim',
      page: 'home',
      projects: null,
      // current: null,
      // upcoming: null,
      feed: null
    };
    var apiUrl = null;
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Sends a GET/ to server to populate feed
      var projectHandler = function projectHandler(data) {
        this.setState({ projects: data });
      };
      var feedHandler = function feedHandler(data) {
        this.setState({ feed: data });
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
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Nav, null),
        React.createElement(Home, { user: this.state.user })
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInVzZXIiLCJwYWdlIiwicHJvamVjdHMiLCJmZWVkIiwiYXBpVXJsIiwicHJvamVjdEhhbmRsZXIiLCJkYXRhIiwic2V0U3RhdGUiLCJmZWVkSGFuZGxlciIsIiQiLCJhamF4IiwibWV0aG9kIiwiR0VUIiwidXJsIiwic3VjY2VzcyIsImJpbmQiLCJjdXJyZW50IiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxLQURLO0FBRVhDLFlBQU0sTUFGSztBQUdYQyxnQkFBVSxJQUhDO0FBSVg7QUFDQTtBQUNBQyxZQUFNO0FBTkssS0FBYjtBQVFBLFFBQU1DLFNBQVMsSUFBZjtBQVZpQjtBQVdsQjs7Ozt3Q0FHbUI7QUFDbEI7QUFDQSxVQUFJQyxpQkFBaUIsU0FBakJBLGNBQWlCLENBQVNDLElBQVQsRUFBZTtBQUNsQyxhQUFLQyxRQUFMLENBQWMsRUFBQ0wsVUFBVUksSUFBWCxFQUFkO0FBQ0QsT0FGRDtBQUdBLFVBQUlFLGNBQWMsU0FBZEEsV0FBYyxDQUFTRixJQUFULEVBQWU7QUFDL0IsYUFBS0MsUUFBTCxDQUFjLEVBQUNKLE1BQU1HLElBQVAsRUFBZDtBQUNELE9BRkQ7O0FBSUEsVUFBSSxLQUFLUCxLQUFMLENBQVdDLElBQVgsS0FBb0IsSUFBeEIsRUFBOEI7QUFDNUI7QUFDQVMsVUFBRUMsSUFBRixDQUFPO0FBQ0xDLGtCQUFRQyxHQURIO0FBRUxDLGVBQUs7QUFGQSxTQUFQO0FBSUQ7O0FBRURKLFFBQUVDLElBQUYsQ0FBTztBQUNMQyxnQkFBUUMsR0FESDtBQUVMQyxhQUFLVCxTQUFTLFNBQVQsR0FBcUIsS0FBS0wsS0FBTCxDQUFXQyxJQUFoQyxHQUF1QyxjQUZ2QztBQUdMYyxpQkFBU1QsZUFBZVUsSUFBZixDQUFvQixJQUFwQjtBQUhKLE9BQVA7QUFLQSxVQUFJLEtBQUtoQixLQUFMLENBQVdpQixPQUFYLEtBQXVCLElBQTNCLEVBQWlDO0FBQy9CUCxVQUFFQyxJQUFGLENBQU87QUFDTEMsa0JBQVFDLEdBREg7QUFFTEMsZUFBS1QsU0FBUyxlQUFULEdBQTJCLEtBQUtMLEtBQUwsQ0FBV2lCLE9BQXRDLEdBQWdELE9BRmhEO0FBR0xGLG1CQUFTTixZQUFZTyxJQUFaLENBQWlCLElBQWpCO0FBSEosU0FBUDtBQUtEO0FBQ0Y7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsNEJBQUMsR0FBRCxPQURGO0FBRUUsNEJBQUMsSUFBRCxJQUFNLE1BQU0sS0FBS2hCLEtBQUwsQ0FBV0MsSUFBdkI7QUFGRixPQURGO0FBTUQ7Ozs7RUFyRGVpQixNQUFNQyxTOztBQXdEeEJDLE9BQU90QixHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXI6ICdUaW0nLFxuICAgICAgcGFnZTogJ2hvbWUnLFxuICAgICAgcHJvamVjdHM6IG51bGwsXG4gICAgICAvLyBjdXJyZW50OiBudWxsLFxuICAgICAgLy8gdXBjb21pbmc6IG51bGwsXG4gICAgICBmZWVkOiBudWxsXG4gICAgfTtcbiAgICBjb25zdCBhcGlVcmwgPSBudWxsO1xuICB9XG5cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBTZW5kcyBhIEdFVC8gdG8gc2VydmVyIHRvIHBvcHVsYXRlIGZlZWRcbiAgICB2YXIgcHJvamVjdEhhbmRsZXIgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtwcm9qZWN0czogZGF0YX0pO1xuICAgIH07XG4gICAgdmFyIGZlZWRIYW5kbGVyID0gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmVlZDogZGF0YX0pO1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5zdGF0ZS51c2VyID09PSBudWxsKSB7XG4gICAgICAvLyBSZWRpcmVjdCB0byBsb2dpbi9zaWdudXBcbiAgICAgICQuYWpheCh7XG4gICAgICAgIG1ldGhvZDogR0VULFxuICAgICAgICB1cmw6ICcvbG9naW4nXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAkLmFqYXgoe1xuICAgICAgbWV0aG9kOiBHRVQsXG4gICAgICB1cmw6IGFwaVVybCArICcvdXNlcnMvJyArIHRoaXMuc3RhdGUudXNlciArICcvcHJvZHVjdGlvbnMnLFxuICAgICAgc3VjY2VzczogcHJvamVjdEhhbmRsZXIuYmluZCh0aGlzKVxuICAgIH0pO1xuICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIG1ldGhvZDogR0VULFxuICAgICAgICB1cmw6IGFwaVVybCArICcvcHJvZHVjdGlvbnMvJyArIHRoaXMuc3RhdGUuY3VycmVudCArICcvZmVlZCcsXG4gICAgICAgIHN1Y2Nlc3M6IGZlZWRIYW5kbGVyLmJpbmQodGhpcylcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE5hdiAvPlxuICAgICAgICA8SG9tZSB1c2VyPXt0aGlzLnN0YXRlLnVzZXJ9Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxud2luZG93LkFwcCA9IEFwcDsiXX0=