const React = require('react');
const { useState, useEffect } = require('react');
const ReactDOM = require('react-dom');
const Article = require('./article.jsx');
const { useParams } = require('react-router-dom');

function ArticleWrapper(props) {
  let params = useParams();
  let url = `/${params.genre}data.json`;
  let [ data, setData ] = useState(null);
  let [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
    .then((response) => {
          return response.json();
    })
    .then((gamedata) => {
          setData(gamedata);
          setLoading(false);
    });
  }, [url]);

  if (!loading) {
    return (
      <div className="articleDisplay">
        {data.games.map((game, i) => {
          return <div className="articleContainer" key={i}>
                    <Article displayVideoHandler={props.displayVideoHandler} {... game} />
                    </div>
        })}
      </div>
    );
  } else {
    return <p>LOADING...</p>
  }
}

module.exports = ArticleWrapper;
