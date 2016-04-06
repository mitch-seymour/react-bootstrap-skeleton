(function(){
    
    var 
        React = require('react'),
        ReactBootstrap = require('react-bootstrap'),
        ReactDOM = require('react-dom'),
        Menu = require('./components/menu.jsx'),
        Alert = ReactBootstrap.Alert;
    
    const alertInstance = (
      <Alert bsStyle="info">
        Welcome! I am a bootstrap component!
      </Alert>
    );
    
    ReactDOM.render(
      <Menu />,
      document.querySelector('#app')
    );
    
})();