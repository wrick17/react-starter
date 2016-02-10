require('../styles/contactDetails.less');

var React = require('react');

var ContactDetails = React.createClass({
  displayName: 'ContactDetails',

  render: function() {
    return (
      <div className="contact-details">
        <h2> {this.props.contact.name} </h2>
        <h3> {this.props.contact.number} </h3>
      </div>
    );
  }
});

module.exports = ContactDetails;