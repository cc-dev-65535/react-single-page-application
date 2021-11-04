const RootDisplay = require('./rootdisplay.jsx');

const sidebarLinks = document.querySelectorAll("#sidebar span");
for (let link of sidebarLinks) {
  link.addEventListener('click', (event) => {
    prevLink = document.querySelector("#sidebar .active");
    prevLink.setAttribute("class", "");
    event.target.setAttribute("class", "active");

    const rootNode = document.querySelector('#root');
    ReactDOM.render(<RootDisplay />, rootNode);
  });
}

const rootNode = document.querySelector('#root');
ReactDOM.render(<RootDisplay />, rootNode);
