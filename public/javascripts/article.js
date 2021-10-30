class Article extends React.Component {
  constructor(props) {
    super(props);
    this.renderInfoBox = this.renderInfoBox.bind(this);
  }

  renderInfoBox() {
    let infoBoxNode = document.querySelector('#infoBox');
    ReactDOM.render( /*#__PURE__*/React.createElement(InfoBox, {
      videoUrl: this.props.videoUrl
    }), infoBoxNode);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tooltip, {
      text: this.props.tooltipText
    }, /*#__PURE__*/React.createElement("img", {
      src: this.props.imageUrl,
      onClick: this.renderInfoBox
    })), /*#__PURE__*/React.createElement("span", {
      className: "header"
    }, " ", this.props.title, " "), /*#__PURE__*/React.createElement("span", {
      className: "footer"
    }, " ", this.props.company, " "));
  }

}