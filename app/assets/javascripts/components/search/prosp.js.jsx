var Dropdown = React.createClass({

  render: function () {

    return (
      <div className="nav-drop">
        <div className={"nav-all" + klass}>
          <a href="#" className="nav-drop-link">
            {linkContent}
          </a>

          <div className="nav-drop-box">
            <div className="drop-box-inner">
              {boxListItems}
            </div>
          </div>

        </div>
      </div>
    );

  }

});
