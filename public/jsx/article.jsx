class Article extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  fetchData() {
    return;
  }

  componentDidMount() {
    return;
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
      <div className="articleContainer" onClick={this.handleClick}>
        <img src={this.props.imageUrl} />
        <h1> {this.props.title} </h1>
        <h2> {this.props.company} </h2>
      </div>
    );
  }
}
