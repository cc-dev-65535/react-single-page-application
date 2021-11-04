const RootDisplay = require('./rootdisplay.jsx');

/*
const sidebarLinks = document.querySelectorAll("#sidebar button");
for (let link of sidebarLinks) {
  link.addEventListener('click', (event) => {

  });
}
*/

const rootNode = document.querySelector('#root');
ReactDOM.render(<RootDisplay />, rootNode);
