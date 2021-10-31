class InfoBox extends React.Component {
  render() {
    let style = {
      zIndex: (this.props.videoDisplay) ? 10 : 0,
      display: (this.props.videoDisplay) ? "" : "none"
    };

    return (
      <div className="infoBox" style={style}>
        <button type="button" className="btn-close" onClick={this.props.displayVideoHandler}></button>
        <iframe width="480" height="360" src={this.props.videoUrl} frameborder="0"></iframe>
      </div>
    );
  }
}
