const React = require('react');
const ReactDOM = require('react-dom');
const Tooltip = require('./tooltip.jsx');

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((state) => ({
      display: !state.display
    }));
  }

  render() {
    let style = {
      display: (this.state.display) ? "" : "none"
    };
    return (
      <div style={style}>
        <Tooltip title={this.props.title} text={this.props.tooltipText}>
          <img src={this.props.imageUrl} onClick={() => {this.props.displayVideoHandler(this.props.videoUrl)}} onLoad={this.toggle} />
        </Tooltip>
        <span className="header"> {this.props.title} </span>
        <span className="footer"> {this.props.company} </span>
      </div>
    );
  }
}

module.exports = Article;
