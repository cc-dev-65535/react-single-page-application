class Display extends React.Component {
  render() {
    return (
      <div className="articleDisplay">
        {this.props.games.map((game, i) => {
          return <div className="articleContainer" key={i}>
                      <Article displayVideoHandler={this.props.displayVideoHandler} {... game} />
                </div>
        })}
      </div>
    );
  }
}
