import React from 'react';
// import './style.css';
import "./Signup.css"

export default function SignupPage() {
  return (
    <main>
      <section className="signup-section">
        <div className="signup-header">
          <h1>Sign-Up</h1>
          <p>Please sign-up here</p>
        </div>
        <form className="signup-form">
          <input type="text" placeholder="First Name" required />
          <br></br>
          <br></br>
          <input type="text" placeholder="Last Name" required />
          <br></br>
          <br></br>
          <input type="text" placeholder="email" required />
          <br></br>
          <br></br>
          <input type="password" placeholder="password" required />
          <br></br>
          <br></br>
          <input type="password" placeholder="confirm-password" required />
          <br></br>
          <br></br>
          <input type="submit" className="btn" value="Sign-Up" />
        </form>
      </section>
    </main>
  );
}