require('../styles/contactForm.less');

var React = require('react');
var Button = require('./Button');

var ContactForm = React.createClass({
  displayName: 'ContactForm',

  addNewContact: function(e) {
    e.preventDefault();

    var data = {
      name: this.refs.name.value,
      number: this.refs.number.value
    }

    this.props.sendData(data);
    e.target.reset();
    this.refs.name.focus();
  },

  render: function() {
    return (
      <div className="contact-form-container">
        <form className="contact-form" onSubmit={this.addNewContact} >
          <input autoFocus ref="name" type="text" placeholder="Name" required/>
          <input ref="number" type="text" placeholder="Phone Number" required/>
          <Button type="submit" title="Save" />
          <Button title="Cancel" />
        </form>
      </div>
    );
  }
});

module.exports = ContactForm;
