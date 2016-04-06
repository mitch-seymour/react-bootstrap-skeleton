# React Bootstrap Skeleton

A skeleton app for React / Bootstrap applications.

___

### Install

```bash
$ git clone git@github.com:mitch-seymour/react-bootstrap-skeleton.git
$ cd react-bootstrap-skeleton.git
$ npm install
```

___

### Run

```bash
$ gulp # will watch for updates to the js, jsx, and css [to do] files in /assets
```

Then, open another tab in your shell,  and run the web server:

```bash
$ npm start
```

___

### Creating Components
Now, you can easily create custom components for your project, or use the built-in [React Bootstrap](https://react-bootstrap.github.io/) components. The jsx for custom components should live in the `/assets/js/components` directory. Here is an example of a custom component called `Menu`.

```javascript
/* assets/components/menu.jsx */

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

```

Now, to use this component, simply mount it in `/assets/app.jsx`.

```javascript
/* assets/app.jsx */

(function(){

  var 
      React = require('react'),
      ReactDOM = require('react-dom'),
      Menu = require('./components/menu.jsx');

    ReactDOM.render(
      <Menu />,
      document.querySelector('#app')
    );
    
})();

```

Now, if you have gulp running per the instructions listed in the **Run** section above, the `jsx` code will be converted into javascript and placed in the `public/js/app.bundle.min.js` file. Now, if you visit [http://localhost:3000](http://localhost:3000), you will see your custom component rendered on the page.

That's pretty much it. In less than 5 minutes, you were able to get a React application running, and should be able to build from here.

___

### To do

* Static site generation that complies with the [wrapbootstrap submission guidelines](http://support.wrapbootstrap.com/knowledge_base/topics/submission-guidelines-themes-and-templates).
