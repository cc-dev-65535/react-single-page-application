const React = require('react');
const ReactDOM = require('react-dom');
const Sidebar = require('./sidebar.jsx');
const { Outlet } = require('react-router-dom');

function Games() {
    return (
      <div>
        <Outlet />
      </div>
    );
}

module.exports = Games;
