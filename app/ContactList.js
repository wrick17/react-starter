require('../styles/contactList.less');

var React = require('react');
var Contact = require('./Contact');

var ContactList = React.createClass({
  displayName: 'ContactList',

  render: function() {

    var that = this;
    var contactsArray = this.props.contacts.map(function(contact) {
      return <Contact displayContactDetails={that.props.displayContactDetails} name={contact.name} id={contact.id} key={contact.id} number={contact.number} />
    });

    return(
      <ul className="contact-list">
        {contactsArray}
      </ul>
    );
  }

});

module.exports = ContactList;