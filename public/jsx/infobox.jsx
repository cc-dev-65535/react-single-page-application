class InfoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="infoBox">
        <iframe id="player" width="640" height="390" src={this.props.videoUrl} frameborder="0"></iframe>
      </div>
    );
  }
}
