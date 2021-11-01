class RootDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      videoUrl: "",
      videoDisplay: false
    };
    this.displayVideo = this.displayVideo.bind(this);
    this.displayVideoNoUrl= this.displayVideoNoUrl.bind(this);
  }

  async componentDidMount() {
    let response = await fetch('/data.json');
    let data = await response.json();
    this.setState({
      data: data.games
    });
  }

  displayVideo(url) {
    this.setState({
      videoUrl: url,
      videoDisplay: true
    });
  }

  displayVideoNoUrl() {
    this.setState({
        videoUrl: "",
        videoDisplay: false
    });
  }

  render() {
    return (
      <div>
        <h1>Popular New Releases</h1>
        <ArticleWrapper displayVideoHandler={this.displayVideo} games={this.state.data} />
        <InfoBox displayVideoHandler={this.displayVideoNoUrl} videoUrl={this.state.videoUrl} videoDisplay={this.state.videoDisplay} />
      </div>
    );
  }
}
