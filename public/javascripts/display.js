function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

class Display extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "articleDisplay"
    }, this.props.games.map((game, i) => {
      return /*#__PURE__*/React.createElement("div", {
        className: "articleContainer",
        key: i
      }, /*#__PURE__*/React.createElement(Article, _extends({
        displayVideoHandler: this.props.displayVideoHandler
      }, game)));
    }));
  }

}