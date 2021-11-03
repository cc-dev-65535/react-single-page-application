class InfoBox extends React.Component {
  render() {
    let style = {
      zIndex: (this.props.videoDisplay) ? 10000 : 0,
      display: (this.props.videoDisplay) ? "" : "none"
    };

    return (
      <div className="modal infoBox" tabindex="-1" style={style}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" aria-label="Close" onClick={this.props.displayVideoHandler}></button>
            </div>
            <div className="modal-body">
              <iframe width="480" height="360" src={this.props.videoUrl} frameborder="0"></iframe>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={this.props.displayVideoHandler}>Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = InfoBox;
