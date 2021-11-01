class InfoBox extends React.Component {
  render() {
    let style = {
      zIndex: this.props.videoDisplay ? 10000 : 0,
      display: this.props.videoDisplay ? "" : "none"
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "modal infoBox",
      tabindex: "-1",
      style: style
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-dialog"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-header"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "btn-close",
      "aria-label": "Close",
      onClick: this.props.displayVideoHandler
    })), /*#__PURE__*/React.createElement("div", {
      className: "modal-body"
    }, /*#__PURE__*/React.createElement("iframe", {
      width: "480",
      height: "360",
      src: this.props.videoUrl,
      frameborder: "0"
    })), /*#__PURE__*/React.createElement("div", {
      className: "modal-footer"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "btn btn-secondary",
      onClick: this.props.displayVideoHandler
    }, "Close")))));
  }

}