import React, { Component } from 'react'; 
import styled from 'styled-components';
import { Link } from "react-router-dom";

class LoginForm extends Component {
  render() {
    return (
      <FormContainer>
        <div className="form-container">
          <form>
            <h1>Sign In</h1>
            <div className="input-container">
              <input className="input-empty" type="email" required />
              <label htmlFor="">Email or Phone Number</label>
            </div>
            <div className="input-container">
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="input-container">
                <Button type="submit">Sign In</Button>
            </div>
            <label className="checkbox-container">
              Remember me
              <input type="checkbox"/>
              <span className="checkmark"></span>
            </label>
            <Link to="/" className="need-help">Need Help?</Link>
          </form>
        </div>
      </FormContainer>
    );
  }
}

export default LoginForm;

// Form Container
const FormContainer = styled.div`
  display: grid; 
  justify-content: center; 
  position: relative; 
  z-index: 5; 

  .form-container {
    background: rgba(0,0,0,0.8); 
    position: relative; 
    width: 28.125rem; 
    height: 41.25;
    padding: 4rem; 
  }

  .input-container {
    display: grid; 
    grid-template-columns: 1fr; 
    margin-top: 1.2rem; 
  }

  .input-empty {
    color: #fff; 
    background: #333; 
    border: 0; 
    border-radius: 0.25rem; 
    height: 3rem; 
    padding: 0.9rem 1.25rem 0; 
  }

  form div label {
    position: absolute; 
    top: 0.625rem; 
    left: 1.25rem; 
    pointer-events: none; 
    color: #8a8a8a; 
    font-size: 1rem; 
    transition: transform 150ms ease-out, font-size 150ms ease-out; 
  }

  form div {
    position: relative;
  }

  input: focus ~ label {
    top: 0.4375rem; 
    font-size: 0.7rem; 
  }

  input:focus {
    outline: none; 
  }

  // Checkbox
  .checkbox-container {
    margin-left: 0.75rem; 
    padding-left: 1.875rem; 
    position: relative; 
    font-size: 0.9rem; 
    color: #999; 
    cursor: pointer; 
  }

  .checkbox-container input {
    display: none; 
  }

  .checkbox-container .checkmark {
    display: inline-block; 
    background: #454545; 
    width: 1.1rem; 
    height: 1.1rem; 
    left: 0; 
    top: 0; 
    border-radius: 0.1rem; 
    position: absolute; 
  }

  .checkbox-container input:checked + .checkmark:after {
    content: ''; 
    position: absolute; 
    height: 0.25rem; 
    width: 0.625rem; 
    border-left: 2px solid #000; 
    border-bottom: 2px solid #000; 
    top: 25%; 
    left: 21%; 
    transform: rotate(-45deg); 
  }

  .need-help {
    text-decoration: none; 
    color: #828282; 
    margin-left: 6.6rem; 
    font-size: 0.9rem; 
  }
`;

// Button 
const Button = styled.button`
  color: #fff; 
  background: rgba(229,9,20);
  border: none; 
  outline: none; 
  padding: 0.8rem 1.3rem; 
  border-radius: 0.125rem; 
  font-size: 1rem; 
  text-align: center; 
  box-shadow: 0 1px 0 rgba(0,0,0,0.45); 
  transition: opacity .2s ease-in; 
  cursor: pointer; 
  text-decoration: none; 
  margin: 1rem 0; 
`;
