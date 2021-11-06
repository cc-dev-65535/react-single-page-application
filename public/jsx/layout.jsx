const React = require('react');
const ReactDOM = require('react-dom');
const Sidebar = require('./sidebar.jsx');
const { Outlet } = require('react-router-dom');

function Layout() {
    return (
      <div>
        <Sidebar />
        <Outlet />
      </div>
    );
}

module.exports = Layout;
