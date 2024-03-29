const React = require('react');
const ReactDOM = require('react-dom');

class Tooltip extends React.Component {
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
      zIndex: (this.state.display) ? 5 : 0,
      display: (this.state.display) ? "" : "none"
    };
    return (
      <div style={{height: "100%"}}>
        <div className="imageContainer" onMouseEnter={this.toggle} onMouseOut={this.toggle}>
          {this.props.children}
        </div>
        <div className="popover" style={style} role="tooltip">
          <h2 className="popover-header">{this.props.title}</h2>
            <div className="popover-body" dangerouslySetInnerHTML={{__html: this.props.text}}>
            </div>
        </div>
      </div>
    );
  }
}

module.exports = Tooltip;
