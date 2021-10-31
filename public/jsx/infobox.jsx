class InfoBox extends React.Component {
  render() {
    let style = {
      zIndex: (this.props.videoDisplay) ? 10 : 0,
      display: (this.props.videoDisplay) ? "" : "none"
    };

    return (
      <div className="infoBox" style={style}>
        <iframe width="480" height="360" src={this.props.videoUrl} frameborder="0"></iframe>
        <button onClick={this.props.displayVideoHandler}></button>
      </div>
    );
  }
}
