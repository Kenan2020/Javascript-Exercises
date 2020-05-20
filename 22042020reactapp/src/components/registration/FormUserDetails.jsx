import React, { Component } from 'react';
import Button from '../layout/Button.jsx';

class FormUserDetails extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    website: '',
    location: '',
    skills: '',
    github: '',
    bio: '',
    linkedin: '',
    youtube: '',
  };
  handleChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };
  submit = (e) => {};
  render() {
    const { values, handleChange } = this.props;
    return (
      <div className='card'>
        <form
          className='card-body'
          style={{ backgroundColor: 'rgba(250, 250, 250, 0.1)' }}
          clickHandler={this.submit}
        >
          <label htmlFor=''>First Name</label>
          <input
            placeholder='Enter Your First Name'
            onChange={this.handleChange('firstName')}
            //defaultValue={values.firstName}
          />
          <br />
          <label htmlFor=''>Last Name</label>
          <input
            placeholder='Enter Your Last Name'
            onChange={this.handleChange('lastName')}
            //defaultValue={values.lastName}
          />
          <br />
          <label htmlFor=''>E-Mail</label>
          <input
            placeholder='Enter Your E-Mail'
            onChange={this.handleChange('email')}
            //defaultValue={values.email}
          />
          <br />
          <label htmlFor=''>Company</label>
          <input
            placeholder='Enter Your Company'
            onChange={this.handleChange('company')}
            //defaultValue={values.email}
          />
          <br />
          <label htmlFor=''>Website</label>
          <input
            placeholder='Enter Your Website'
            onChange={this.handleChange('website')}
            //defaultValue={values.email}
          />
          <br />
          <label htmlFor=''>Location</label>
          <input
            placeholder='Enter Your Location'
            onChange={this.handleChange('location')}
            //defaultValue={values.email}
          />
          <br />
          <label htmlFor=''>Skills</label>
          <input
            placeholder='Enter Your Skills'
            onChange={this.handleChange('skills')}
            //defaultValue={values.email}
          />
          <br />
          <label htmlFor=''>Github user name</label>
          <input
            placeholder='Enter Your GitHub user name'
            onChange={this.handleChange('github')}
            //defaultValue={values.email}
          />
          <br />
          <label htmlFor=''>Bio</label>
          <input
            placeholder='Enter Your bio'
            onChange={this.handleChange('bio')}
            //defaultValue={values.email}
          />
          <br />
          <label htmlFor=''>LinkedIn</label>
          <input
            placeholder='Enter Your LinkedIn'
            onChange={this.handleChange('linkedin')}
            //defaultValue={values.email}
          />
          <br />
          <label htmlFor=''>Youtube</label>
          <input
            placeholder='Enter Your Youtube'
            onChange={this.handleChange('youtube')}
            //defaultValue={values.email}
          />
          <br />

          <Button value='submit' className='btn btn-outline-primary m-2' />
        </form>
      </div>
    );
  }
}
const style = {
  button: {
    margin: 15,
  },
};
export default FormUserDetails;
