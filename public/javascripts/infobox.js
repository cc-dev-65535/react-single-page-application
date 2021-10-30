class InfoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "infoBox"
    }, /*#__PURE__*/React.createElement("iframe", {
      id: "player",
      width: "640",
      height: "390",
      src: this.props.videoUrl,
      frameborder: "0"
    }));
  }

}