var React = require('react');
var ReactDOM = require('react-dom');

var BugFilter = React.createClass({
  render: function() {
    console.log("Rendering BugFilter");
    return (
      <button onClick={this.submit}>Lọc Kết Quả</button>
    )
  },

  submit: function(e) {
    this.props.submitHandler({priority: "P1"});
  }
});

module.exports = BugFilter;
