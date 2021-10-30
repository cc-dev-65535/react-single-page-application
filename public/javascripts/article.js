class Article extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  fetchData() {
    return;
  }

  componentDidMount() {
    return;
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
      onClick: this.handleClick
    }, /*#__PURE__*/React.createElement("img", {
      src: this.props.imageUrl
    }), /*#__PURE__*/React.createElement("h1", null, " ", this.props.title, " "), /*#__PURE__*/React.createElement("h2", null, " ", this.props.company, " "));
  }

}