require('../styles/style.less');
require('../styles/app.less');

var React = require('react');
var ReactDOM = require('react-dom');
var Contacts = require('./Contacts.js');
var ContactForm = require('./ContactForm.js');
var ContactDetails = require('./ContactDetails');

var ContactListApp = React.createClass({
  displayName: 'ContactListApp',

  getInitialState: function() {
    return {
      contacts: [
        {
          id: 0,
          name: 'pallavi',
          number: '+918123265607'
        },
        {
          id: 1,
          name: 'pratyush',
          number: '+919432909925'
        }
      ],
      contact: {},
      showContactDetails: false
    };
  },

  displayContactDetails: function(id) {
    var filteredContacts = this.state.contacts.filter(function(contact) {
      return contact.id === id;
    });
    this.setState({contact: filteredContacts[0]});
    this.setState({
      showContactDetails: true
    });
  },

  sendData: function(data) {
    data.id = this.state.contacts.length;

    var newContacts = this.state.contacts;
    newContacts.push(data);

    this.setState({contacts: newContacts});
  },

  showContactForm: function() {
    this.setState({
      showContactDetails: false
    });
  },

  render: function() {
    return (
      <div className="contacts-app">
        <h1>Contacts App</h1>
        <div className="contacts-app-content">
          <Contacts displayContactDetails={this.displayContactDetails} contacts={this.state.contacts} showContactForm={this.showContactForm} />
          { this.state.showContactDetails ?
            <ContactDetails contact={this.state.contact} /> :
            <ContactForm sendData={this.sendData} /> }
        </div>
      </div>
    );
  }
});

ReactDOM.render( <ContactListApp />, document.getElementById('app') );