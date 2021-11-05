const React = require('react');
const ReactDOM = require('react-dom');
const Article = require('./article.jsx');
const { useParams } = require('react-router-dom');

function ArticleWrapper(props) {
  let params = useParams();
  let url = `/${params.genre}data.json`;
  fetch(url).then((response) => response.json()).then((data) => {
    props.rerender(data);
  });

  return (props.data) ? (
    <div className="articleDisplay">
      {props.data.games.map((game, i) => {
        return <div className="articleContainer" key={i}>
                    <Article displayVideoHandler={props.displayVideoHandler} {... game} />
              </div>
      })}
    </div>
  ) : (
    <p>LOADING</p>
  );
}

module.exports = ArticleWrapper;
