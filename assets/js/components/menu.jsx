var
    React = require('react'),
    Menu;

Menu = React.createClass({
  render: function() {
    return (
      <div className="menu">
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
      </div>
    );
  }
});

module.exports = Menu;