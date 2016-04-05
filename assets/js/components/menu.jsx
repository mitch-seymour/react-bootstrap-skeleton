var
    React = require('react'),
    Menu;

Menu = React.createClass({
  render: function() {
    return (
      <div className="menu">
        Hello, world! I am a custom menu.
      </div>
    );
  }
});

module.exports = Menu;