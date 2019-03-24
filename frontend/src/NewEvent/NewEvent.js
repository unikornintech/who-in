import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormField, Heading } from 'grommet';

import './NewEvent.css';

class NewEventForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      timeDate: '',
      location: '',
      contact: '',
      price: '',
      parking: '',
      minMaxAttendees: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    axios
      .post('http://localhost:3000', this.state)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    evt.preventDefault();
  }

  render() {
    const {
      name,
      timeDate,
      location,
      contact,
      price,
      parking,
      minMaxAttendees
    } = this.state;
    return (
      <div className="form-container">
        <Heading className="form-header" margin="none">
          Add new event
        </Heading>
        <Form onSubmit={this.handleSubmit}>
          <FormField
            name="name"
            onChange={this.handleChange}
            label="Name"
            value={name}
          />
          <FormField
            name="timeDate"
            onChange={this.handleChange}
            label="date/time"
            value={timeDate}
          />
          <FormField
            name="location"
            onChange={this.handleChange}
            label="Location"
            value={location}
          />
          <FormField
            name="contact"
            onChange={this.handleChange}
            label="Contact"
            value={contact}
          />
          <FormField
            name="price"
            onChange={this.handleChange}
            label="Price"
            value={price}
          />
          <FormField
            name="parking"
            onChange={this.handleChange}
            label="Parking"
            value={parking}
          />
          <FormField
            name="minMaxAttendees"
            onChange={this.handleChange}
            label="Attendee Range"
            value={minMaxAttendees}
          />
          <Button type="submit" label="Submit" primary />
        </Form>
      </div>
    );
  }
}

export default NewEventForm;
