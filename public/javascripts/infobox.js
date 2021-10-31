class InfoBox extends React.Component {
  render() {
    let style = {
      zIndex: this.props.videoDisplay ? 10 : 0,
      display: this.props.videoDisplay ? "" : "none"
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "infoBox",
      style: style
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "btn-close",
      onClick: this.props.displayVideoHandler
    }), /*#__PURE__*/React.createElement("iframe", {
      width: "480",
      height: "360",
      src: this.props.videoUrl,
      frameborder: "0"
    }));
  }

}