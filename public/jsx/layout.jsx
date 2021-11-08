const React = require('react');
const ReactDOM = require('react-dom');
const Sidebar = require('./sidebar.jsx');
const Navbar = require('./navbar.jsx');
const { Outlet } = require('react-router-dom');

function Layout() {
    return (
      <div>
        <Navbar />
        <Sidebar />
        <Outlet />
      </div>
    );
}

module.exports = Layout;
