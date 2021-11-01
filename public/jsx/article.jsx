class Article extends React.Component {
  render() {
    return (
      <div>
        <Tooltip text={this.props.tooltipText}>
          <img src={this.props.imageUrl} onClick={() => {this.props.displayVideoHandler(this.props.videoUrl)}}/>
        </Tooltip>
        <span className="header"> {this.props.title} </span>
        <span className="footer"> {this.props.company} </span>
      </div>
    );
  }
}
