var React = require('react');
var BlabsList = require('./List.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return { data: [] };
  },
  componentDidMount: function() {
    this.setState({data: [{id: 2, content: 'blab 1'}, {id: 1, content: "blab 2" }] });
  },
  render: function() {
    return (
      <div className="blabs-view">
        <BlabsList data={this.state.data} />
      </div>
    );
  }
});
