const Article = require('./article.jsx');

class ArticleWrapper extends React.Component {
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

module.exports = ArticleWrapper;
