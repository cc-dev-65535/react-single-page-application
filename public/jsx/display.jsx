const React = require('react');
const ReactDOM = require('react-dom');
const ArticleWrapper = require('./articlewrapper.jsx');
const InfoBox = require('./infobox.jsx');
const Sidebar = require('./sidebar.jsx');

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoUrl: "",
      videoDisplay: false
    };
    this.displayVideo = this.displayVideo.bind(this);
    this.displayVideoNoUrl = this.displayVideoNoUrl.bind(this);
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
        <ArticleWrapper displayVideoHandler={this.displayVideo} />
        <InfoBox displayVideoHandler={this.displayVideoNoUrl} videoUrl={this.state.videoUrl} videoDisplay={this.state.videoDisplay} />
        <footer> &copy; GAM3R </footer>
      </div>
    );
  }
}

module.exports = Display;
