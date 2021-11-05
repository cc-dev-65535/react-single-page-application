const React = require('react');
const ReactDOM = require('react-dom');

class Home extends React.Component {
  render() {
    return (
      <div id="mainContent">
        <h1>Disclaimer</h1>
        <p>This site is for educational purposes only</p>
        <br />
        <br />
        <footer> &copy; GAM3R </footer>
      </div>
    );
  }
}

module.exports = Home;
