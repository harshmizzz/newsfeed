import React, { useState, useMemo } from "react";
import Select from "react-select";
import './Feedback.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import countryList from "react-select-country-list";
function Feedback() {
  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
    Address: "",
    Email: "",
    Phone: "",
  });
  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }
  
  const [country, setcountry] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = country => {
   setcountry(country)
  }



  return (
    <div className="form-container">
      <div className="text">
          <h3>Thank you So much for taking the time! </h3>
          <p> Please provide the details below</p>
      </div>

      <form>
        <label>
          First name:
          <input type="text" value={state.firstName} onChange={handleChange} />
        </label>
        <label>
          Last name:
          <input
            type="text"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
          />
        </label>
        <label>
          Address:
          <textarea
            type="text"
            name="Address"
            value={state.Address}
            onChange={handleChange}
          ></textarea>
        </label>
        <label>
            Country:
            <Select options={options} value={country} onChange={changeHandler} />
        </label>
        <label>
            Email:
            <input  type="text"
            name="Email"
            value={state.Email}
            onChange={handleChange} required />
        </label>
        <label>
            Phone Number:
            <PhoneInput
      placeholder="Enter phone number"
      defaultCountry="IN"
      value={state.Phone}
      onChange={handleChange} required/>
        </label>
        <button className="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default Feedback;
