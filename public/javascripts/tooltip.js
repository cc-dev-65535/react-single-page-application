class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      display: !this.state.display
    });
  }

  render() {
    let style = {
      zIndex: this.state.display ? 5 : 0,
      display: this.state.display ? "" : "none"
    };
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "imageContainer",
      onMouseEnter: this.toggle,
      onMouseOut: this.toggle
    }, this.props.children), /*#__PURE__*/React.createElement("div", {
      className: "tooltip",
      style: style,
      role: "tooltip"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tooltip-inner"
    }, this.props.text)));
  }

}