class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      company: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  fetchData() {
    return;
  }

  componentDidMount() {
    this.fetchData();
    this.setState({
      title: "Arknights",
      company: "Yostar Hypergryph"
    });
  }
  /*
    renderInfoBox() {
      let infoBoxNode = document.createElement('div');
      infoBoxNode.setAttribute('class','infobox');
      ReactDOM.render(React.createElement(InfoBox), infoboxNode);
    }*/


  handleClick() {
    //this.renderInfoBox();
    return;
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "articleContainer",
      onClick: this.handleClick()
    }, /*#__PURE__*/React.createElement("img", {
      src: "/images/arknights.png"
    }), /*#__PURE__*/React.createElement("h1", null, " ", this.state.title, " "), /*#__PURE__*/React.createElement("h2", null, " ", this.state.company, " "));
  }

}