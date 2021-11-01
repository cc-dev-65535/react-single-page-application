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
      <div>
        <div className="imageContainer" onMouseEnter={this.toggle} onMouseOut={this.toggle}>
          {this.props.children}
        </div>
        <div className="tooltip" style={style} role="tooltip">
            <div className="tooltip-inner">
              {this.props.text}
            </div>
        </div>
      </div>
    );
  }
}
