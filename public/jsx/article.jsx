class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      company: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  fetchData() {
    return;
  }

  componentDidMount() {
    this.fetchData();
    this.setState({
      title: "ARKNIGHTS",
      company: "YOSTAR HYPERGRYPH"
    });
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
    return (
      <div className="articleContainer" onClick={this.handleClick()}>
        <img src="/images/arknights.png" />
        <h1> {this.state.title} </h1>
        <h2> {this.state.company} </h2>
      </div>
    );
  }
}
