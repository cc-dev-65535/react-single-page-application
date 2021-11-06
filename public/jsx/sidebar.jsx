const React = require('react');
const ReactDOM = require('react-dom');
const { NavLink } = require('react-router-dom');

class Sidebar extends React.Component {
  render() {
    return (
      <div id="sidebar" className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
        <ul className="nav nav-pills flex-column mb-auto">
          <li><NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>HOME</NavLink></li>
          <li><NavLink to="/games/shooter" className={({isActive}) => isActive ? "active" : ""}>SHOOTER</NavLink></li>
          <li><NavLink to="/games/jrpg" className={({isActive}) => isActive ? "active" : ""}>JRPG</NavLink></li>
          <li><NavLink to="/games/mobile" className={({isActive}) => isActive ? "active" : ""}>MOBILE</NavLink></li>
          <li><NavLink to="/games/fighting" className={({isActive}) => isActive ? "active" : ""}>FIGHTING</NavLink></li>
        </ul>
      </div>
    );
  }
}

module.exports = Sidebar;
