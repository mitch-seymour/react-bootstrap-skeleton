(function(){
    
    var 
        React = require('react'),
        ReactBootstrap = require('react-bootstrap'),
        ReactDOM = require('react-dom'),
        Menu = require('./components/menu.jsx'),
        Alert = ReactBootstrap.Alert;
    
    
    ReactDOM.render(
    <div>
        <Menu />
        <Alert bsStyle="info">
            Welcome! I am a bootstrap component!
        </Alert>
    </div>,
      document.querySelector('#app')
    );
    
})();