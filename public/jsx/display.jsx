class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  fetchData() {
    fetch('/data.json');
  }

  async componentDidMount() {
    let response = await fetch('/data.json');
    let data = await response.json();
    this.setState({
      data: data.games
    });
  }


  render() {
    return (
      <div className="articleDisplay">
        {this.state.data.map((game, i) => {
          return <div className="articleContainer" key={i}>
                      <Article {... game} />
                </div>
        })}
      </div>
    );
  }
}
