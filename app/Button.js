require('../styles/button.less');

var React = require('react');

var Button = React.createClass({
  displayName: 'Button',

  render: function() {

    var classNames = 'btn ';
    if(this.props.className)
      classNames += this.props.className;

    return (
      <button onClick={this.props.onClick} type={this.props.type || 'button'} className={classNames}> {this.props.title} </button>
    );
  }
});

module.exports = Button;