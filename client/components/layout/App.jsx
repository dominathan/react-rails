var React = require('react');
var Reqwest = require('reqwest');
var BlabsView = require('../blabs/View.jsx');
var Menu = require('./Menu.jsx');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

module.exports = React.createClass({
  getDefaultProps: function() {
    return { origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''};
  },
  getInitialState: function() {
    return {showMenu: false};
  },
  handleMenuClick: function() {
    this.setState({showMenu: !this.state.showMenu});
  },
  readFromAPI: function(url, successFunction) {
    Reqwest({
      url: url,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: successFunction,
      error: function(error) {
        console.log(url, error['response']);
        location = '/';
      }
    });
  },
  render: function() {
    return (
      <div id="app" className={Menu}>
        <Menu sendMenuClick={this.handleMenuClick} />
        <div id="content">
          <RouteHandler origin={this.props.origin} readFromAPI={this.readFromAPI} />
        </div>
      </div>
    );
  }
});
