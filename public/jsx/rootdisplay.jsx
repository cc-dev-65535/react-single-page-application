const React = require('react');
const ReactDOM = require('react-dom');
const ArticleWrapper = require('./articlewrapper.jsx');
const InfoBox = require('./infobox.jsx');
const Sidebar = require('./sidebar.jsx');

class RootDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      videoUrl: "",
      videoDisplay: false,
      //rerender: false
    };
    this.displayVideo = this.displayVideo.bind(this);
    this.displayVideoNoUrl= this.displayVideoNoUrl.bind(this);
    this.rerender= this.rerender.bind(this);
  }
/*
  async componentDidMount() {
    let url = `/shooterdata.json`;
    let response = await fetch(url);
    let data = await response.json();
    this.setState({
      data: data.games
    });
  }
*/
  rerender(data) {
    this.setState({
      data: data
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
      <div id="mainContent">
        <h1>Popular New Releases</h1>
        <ArticleWrapper displayVideoHandler={this.displayVideo} rerender={this.rerender} data={this.state.data} />
        <InfoBox displayVideoHandler={this.displayVideoNoUrl} videoUrl={this.state.videoUrl} videoDisplay={this.state.videoDisplay} />
        <br />
        <br />
        <footer> &copy; GAM3R </footer>
      </div>
    );
  }
}

module.exports = RootDisplay;
