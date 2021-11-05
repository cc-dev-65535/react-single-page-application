const React = require('react');
const ReactDOM = require('react-dom');
const { Link } = require('react-router-dom');

class Sidebar extends React.Component {
  render() {
    return (
      <div id="sidebar" className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
        <ul className="nav nav-pills flex-column mb-auto">
          <li><Link to="/" activeClassName="active">HOME</Link></li>
          <li><Link to="/shooter" activeClassName="active">SHOOTER</Link></li>
          <li><Link to="/jrpg" activeClassName="active">JRPG</Link></li>
          <li><Link to="/mobile" activeClassName="active">MOBILE</Link></li>
          <li><Link to="/fighting" activeClassName="active">FIGHTING</Link></li>
        </ul>
      </div>
    );
  }
}

module.exports = Sidebar;
