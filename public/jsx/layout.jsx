const React = require('react');
const ReactDOM = require('react-dom');
const Sidebar = require('./sidebar.jsx');
const { Outlet } = require('react-router-dom');

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Outlet />
      </div>
    );
  }
}

module.exports = Layout;
