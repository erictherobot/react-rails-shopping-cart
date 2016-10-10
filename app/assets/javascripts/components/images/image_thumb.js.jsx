var ImageThumb = React.createClass({

  render: function () {
    return (
      <img src={this.props.thumb.thumb_url} onMouseEnter={this.props.hov} className="alt-thumb-image" />
    );

  }
});
