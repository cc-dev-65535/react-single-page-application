const React = require('react');
const ReactDOM = require('react-dom');
const { Routes, Route, BrowserRouter } = require('react-router-dom');
const RootDisplay = require('./rootdisplay.jsx');
const Layout = require('./layout.jsx');
const Home = require('./home.jsx');

const rootNode = document.querySelector('#root');
ReactDOM.render((
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":genre" element={<RootDisplay />} />
      </Route>
    </Routes>
  </BrowserRouter>
), rootNode);
