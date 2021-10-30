class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  fetchData() {
    fetch('/data.json');
  }

  async componentDidMount() {
    let response = await fetch('/data.json');
    let data = await response.json();
    this.setState({
      data: data.games
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "articleDisplay"
    }, this.state.data.map((game, i) => {
      return /*#__PURE__*/React.createElement("div", {
        className: "articleContainer",
        key: i
      }, /*#__PURE__*/React.createElement(Article, game));
    }));
  }

}