const React = require('react');
const ReactDOM = require('react-dom');
const { Routes, Route, BrowserRouter } = require('react-router-dom');
const Display = require('./display.jsx');
const Layout = require('./layout.jsx');
const Home = require('./home.jsx');
const Games = require('./games.jsx');
const Error = require('./error.jsx');

require('../stylesheets/style.css');

const rootNode = document.querySelector('#root');
ReactDOM.render((
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="games" element={<Games />}>
          <Route path=":genre" element={<Display />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
), rootNode);
