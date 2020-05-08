import React, { Component } from 'react';
import './style.css';

const checkRegex = RegExp(
  /^\D*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: null,
      dob: null,
      profession: null,
      designation: null,
      formErrors: {
        fname: "",
        dob: "",
        profession: "",
        designation: ""
      }
    };
  }

  handleSubmit = e => {
    

    if (formValid(this.state)) {
      alert(`
        --SUBMITTING--
        Name: ${this.state.fname}
        DOB: ${this.state.dob}
        Profession: ${this.state.profession}
        Designation: ${this.state.designation}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
	console.log(JSON.stringify(this.state));
	e.preventDefault();
  };

  handleChange = e => {
    //e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "fname":
        formErrors.fname = checkRegex.test(value) && value.length<=30
          ? "" : "maximum 30 characters allowed, should not have numbers";
        break;
      case "profession":
        formErrors.profession = checkRegex.test(value) && value.length<=30
          ? ""
          : "maximum 30 characters allowed, should not have numbers";
		break;
      case "designation":
        formErrors.designation =checkRegex.test(value) && value.length<=30
          ? "" : "maximum 30 characters allowed, should not have numbers";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
	  
        <div className="form-wrapper">
          <h1>Profile Info</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="fname">
              <label htmlFor="fname">Name</label>
              <input
                className={formErrors.fname.length > 0 ? "error" : null}
                placeholder="Name"
                type="text"
                name="fname"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.fname.length > 0 && (
                <span className="errorMessage">{formErrors.fname}</span>
              )}
            </div>
            <div className="dob">
              <label htmlFor="dob">DOB</label>
              <input
                className={formErrors.dob.length > 0 ? "error" : null}
                placeholder="Date of Birth"
                type="date"
                name="dob"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="profession">
              <label htmlFor="profession">Profession</label>
              <input
                className={formErrors.profession.length > 0 ? "error" : null}
                placeholder="profession"
                type="text"
                name="profession"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.profession.length > 0 && (
                <span className="errorMessage">{formErrors.profession}</span>
              )}
            </div>
            <div className="designation">
              <label htmlFor="designation">Designation</label>
              <input
                className={formErrors.designation.length > 0 ? "error" : null}
                placeholder="designation"
                type="text"
                name="designation"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.designation.length > 0 && (
                <span className="errorMessage">{formErrors.designation}</span>
              )}
            </div>
            <div className="c">
              <button type="submit">Submit</button>
            </div>
			<div className="r">
				<button name="reset" type="reset">Cancel</button>
			</div>
          </form>
        </div>
		</div>
    );
  }
}



export default Home