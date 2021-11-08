const React = require('react');
const ReactDOM = require('react-dom');
const { Link } = require('react-router-dom');

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-md navbar-light">
        <Link to="/" id="title" className="navbar-brand">GAM3R</Link>
      </nav>
    );
  }
}

module.exports = Navbar;
