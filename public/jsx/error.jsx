const React = require('react');
const ReactDOM = require('react-dom');

function Error() {
    return (
      <div className="container-fluid">
        <div id="mainContent">
          <h1>Oops, Wrong Page</h1>
          <p>Page does not exist</p>
          <footer> &copy; GAM3R </footer>
        </div>
      </div>
    );
}

module.exports = Error;
