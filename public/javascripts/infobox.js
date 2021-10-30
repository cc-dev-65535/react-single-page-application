class InfoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let infoBoxNode = document.querySelector('#infoBox');
    let buttonNode = document.querySelector('#closeButton');
    buttonNode.addEventListener('click', event => {
      ReactDOM.render( /*#__PURE__*/React.createElement("div", null), infoBoxNode);
    });
  }

  componentWillUnmount() {
    let infoBoxNode = document.querySelector('#infoBox');
    let buttonNode = document.querySelector('#closeButton');
    buttonNode.removeEventListener('click', event => {
      ReactDOM.render( /*#__PURE__*/React.createElement("div", null), infoBoxNode);
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "infoBox"
    }, /*#__PURE__*/React.createElement("iframe", {
      id: "player",
      width: "640",
      height: "590",
      src: this.props.videoUrl,
      frameborder: "0"
    }), /*#__PURE__*/React.createElement("button", {
      id: "closeButton"
    }));
  }

}