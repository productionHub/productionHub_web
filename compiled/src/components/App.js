'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Components) {
  _inherits(App, _React$Components);

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
}(React.Components);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInVzZXIiLCJwYWdlIiwicHJvamVjdHMiLCJmZWVkIiwiYXBpVXJsIiwicHJvamVjdEhhbmRsZXIiLCJkYXRhIiwic2V0U3RhdGUiLCJmZWVkSGFuZGxlciIsIiQiLCJhamF4IiwibWV0aG9kIiwiR0VUIiwidXJsIiwic3VjY2VzcyIsImJpbmQiLCJjdXJyZW50IiwiUmVhY3QiLCJDb21wb25lbnRzIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sS0FESztBQUVYQyxZQUFNLE1BRks7QUFHWEMsZ0JBQVUsSUFIQztBQUlYO0FBQ0E7QUFDQUMsWUFBTTtBQU5LLEtBQWI7QUFRQSxRQUFNQyxTQUFTLElBQWY7QUFWaUI7QUFXbEI7Ozs7d0NBR21CO0FBQ2xCO0FBQ0EsVUFBSUMsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFTQyxJQUFULEVBQWU7QUFDbEMsYUFBS0MsUUFBTCxDQUFjLEVBQUNMLFVBQVVJLElBQVgsRUFBZDtBQUNELE9BRkQ7QUFHQSxVQUFJRSxjQUFjLFNBQWRBLFdBQWMsQ0FBU0YsSUFBVCxFQUFlO0FBQy9CLGFBQUtDLFFBQUwsQ0FBYyxFQUFDSixNQUFNRyxJQUFQLEVBQWQ7QUFDRCxPQUZEOztBQUlBLFVBQUksS0FBS1AsS0FBTCxDQUFXQyxJQUFYLEtBQW9CLElBQXhCLEVBQThCO0FBQzVCO0FBQ0FTLFVBQUVDLElBQUYsQ0FBTztBQUNMQyxrQkFBUUMsR0FESDtBQUVMQyxlQUFLO0FBRkEsU0FBUDtBQUlEOztBQUVESixRQUFFQyxJQUFGLENBQU87QUFDTEMsZ0JBQVFDLEdBREg7QUFFTEMsYUFBS1QsU0FBUyxTQUFULEdBQXFCLEtBQUtMLEtBQUwsQ0FBV0MsSUFBaEMsR0FBdUMsY0FGdkM7QUFHTGMsaUJBQVNULGVBQWVVLElBQWYsQ0FBb0IsSUFBcEI7QUFISixPQUFQO0FBS0EsVUFBSSxLQUFLaEIsS0FBTCxDQUFXaUIsT0FBWCxLQUF1QixJQUEzQixFQUFpQztBQUMvQlAsVUFBRUMsSUFBRixDQUFPO0FBQ0xDLGtCQUFRQyxHQURIO0FBRUxDLGVBQUtULFNBQVMsZUFBVCxHQUEyQixLQUFLTCxLQUFMLENBQVdpQixPQUF0QyxHQUFnRCxPQUZoRDtBQUdMRixtQkFBU04sWUFBWU8sSUFBWixDQUFpQixJQUFqQjtBQUhKLFNBQVA7QUFLRDtBQUNGOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFLDRCQUFDLEdBQUQsT0FERjtBQUVFLDRCQUFDLElBQUQsSUFBTSxNQUFNLEtBQUtoQixLQUFMLENBQVdDLElBQXZCO0FBRkYsT0FERjtBQU1EOzs7O0VBckRlaUIsTUFBTUMsVTs7QUF3RHhCQyxPQUFPdEIsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHMge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlcjogJ1RpbScsXG4gICAgICBwYWdlOiAnaG9tZScsXG4gICAgICBwcm9qZWN0czogbnVsbCxcbiAgICAgIC8vIGN1cnJlbnQ6IG51bGwsXG4gICAgICAvLyB1cGNvbWluZzogbnVsbCxcbiAgICAgIGZlZWQ6IG51bGxcbiAgICB9O1xuICAgIGNvbnN0IGFwaVVybCA9IG51bGw7XG4gIH1cblxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIFNlbmRzIGEgR0VULyB0byBzZXJ2ZXIgdG8gcG9wdWxhdGUgZmVlZFxuICAgIHZhciBwcm9qZWN0SGFuZGxlciA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Byb2plY3RzOiBkYXRhfSk7XG4gICAgfTtcbiAgICB2YXIgZmVlZEhhbmRsZXIgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtmZWVkOiBkYXRhfSk7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLnN0YXRlLnVzZXIgPT09IG51bGwpIHtcbiAgICAgIC8vIFJlZGlyZWN0IHRvIGxvZ2luL3NpZ251cFxuICAgICAgJC5hamF4KHtcbiAgICAgICAgbWV0aG9kOiBHRVQsXG4gICAgICAgIHVybDogJy9sb2dpbidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgICQuYWpheCh7XG4gICAgICBtZXRob2Q6IEdFVCxcbiAgICAgIHVybDogYXBpVXJsICsgJy91c2Vycy8nICsgdGhpcy5zdGF0ZS51c2VyICsgJy9wcm9kdWN0aW9ucycsXG4gICAgICBzdWNjZXNzOiBwcm9qZWN0SGFuZGxlci5iaW5kKHRoaXMpXG4gICAgfSk7XG4gICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgbWV0aG9kOiBHRVQsXG4gICAgICAgIHVybDogYXBpVXJsICsgJy9wcm9kdWN0aW9ucy8nICsgdGhpcy5zdGF0ZS5jdXJyZW50ICsgJy9mZWVkJyxcbiAgICAgICAgc3VjY2VzczogZmVlZEhhbmRsZXIuYmluZCh0aGlzKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2Lz5cbiAgICAgICAgPEhvbWUgdXNlcj17dGhpcy5zdGF0ZS51c2VyfS8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbndpbmRvdy5BcHAgPSBBcHA7Il19