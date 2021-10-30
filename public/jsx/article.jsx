class Article extends React.Component {
  constructor(props) {
    super(props);
    this.renderInfoBox = this.renderInfoBox.bind(this);
  }

  renderInfoBox() {
    let infoBoxNode = document.querySelector('#infoBox');
    ReactDOM.render(<InfoBox videoUrl={this.props.videoUrl} />, infoBoxNode);
  }

  render() {
    return (
      <div>
        <Tooltip text={this.props.tooltipText}>
          <img src={this.props.imageUrl} onClick={this.renderInfoBox}/>
        </Tooltip>
        <span className="header"> {this.props.title} </span>
        <span className="footer"> {this.props.company} </span>
      </div>
    );
  }
}
