require('../styles/contacts.less');

var React = require('react');
var ContactList = require('./ContactList');
var Button = require('./Button');

var Contacts = React.createClass({
  displayName: 'Contacts',

  render: function() {
    return (
      <div className="contacts">
        <Button title="Add New Contact" className="add-new-contact" onClick={this.props.showContactForm} />
        <ContactList displayContactDetails={this.props.displayContactDetails} contacts={this.props.contacts} />
      </div>
    );
  }
});

module.exports = Contacts;
