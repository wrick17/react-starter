require('../styles/contact.less');

var React = require('react');

var Contact = React.createClass({
  displayName: 'Contact',

  displayContactDetails: function(e) {
    this.props.displayContactDetails(this.props.id);
  },

  render: function() {
    return (
      <li className="contact" onClick={this.displayContactDetails} >
        <label className="contact-name"> {this.props.name} </label>
        <span className="contact-number"> {this.props.number} </span>
      </li>
    );
  }
});

module.exports = Contact;