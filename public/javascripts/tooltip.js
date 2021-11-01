class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(state => ({
      display: !state.display
    }));
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
      className: "popover",
      style: style,
      role: "tooltip"
    }, /*#__PURE__*/React.createElement("h2", {
      class: "popover-header"
    }, this.props.title), /*#__PURE__*/React.createElement("div", {
      className: "popover-body",
      dangerouslySetInnerHTML: {
        __html: this.props.text
      }
    })));
  }

}