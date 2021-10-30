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
    // must await async func here
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
          return <div key={i}><Article title={game.title} company={game.company} imageUrl={game.imageUrl} /></div>
        })}
      </div>
    );
  }
}
