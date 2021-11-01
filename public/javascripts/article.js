class Article extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tooltip, {
      text: this.props.tooltipText
    }, /*#__PURE__*/React.createElement("img", {
      src: this.props.imageUrl,
      onClick: () => {
        this.props.displayVideoHandler(this.props.videoUrl);
      }
    })), /*#__PURE__*/React.createElement("span", {
      className: "header"
    }, " ", this.props.title, " "), /*#__PURE__*/React.createElement("span", {
      className: "footer"
    }, " ", this.props.company, " "));
  }

}