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
  let [ error, setError ] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch(url)
    .then((response) => {
          return response.json();
    })
    .then((gamedata) => {
          setData(gamedata);
          setLoading(false);
    })
    .catch((err) => {
          setError(true)
          setLoading(false);
    });
  }, [url]);

  if (loading) {
    return (
      <p>LOADING...</p>
    );
  } else if (error) {
    return (
      <div>
        <h1>Error</h1>
        <p>No such game data exists</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Popular New Releases</h1>
        <div className="articleDisplay">
          {data.games.map((game, i) => {
            return <div className="articleContainer" key={i}>
                    <Article displayVideoHandler={props.displayVideoHandler} {... game} />
                    </div>
          })}
        </div>
      </div>
    );
  }
}

module.exports = ArticleWrapper;
