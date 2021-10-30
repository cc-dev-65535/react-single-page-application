class InfoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    let infoBoxNode = document.querySelector('#infoBox');
    let buttonNode = document.querySelector('#closeButton');
    buttonNode.addEventListener('click',((event) => {ReactDOM.render(<div></div>, infoBoxNode)}));
  }

  componentWillUnmount() {
    let infoBoxNode = document.querySelector('#infoBox');
    let buttonNode = document.querySelector('#closeButton');
    buttonNode.removeEventListener('click', ((event) => {ReactDOM.render(<div></div>, infoBoxNode)}));
  }

  render() {
    return (
      <div className="infoBox">
        <iframe id="player" width="640" height="590" src={this.props.videoUrl} frameborder="0"></iframe>
        <button id="closeButton"></button>
      </div>
    );
  }
}
