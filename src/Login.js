import React from 'react';
// import "./Signup.css"
import './Login.css'

export default function LoginPage() {
  return (
    <main>
      <section className="login-section">
        <div className="loogin-header">
          <h2>Login</h2>
          <p>please login here</p>
        
        </div>

        <form className="login-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="submit" className="btn" value="Login"></input>
        </form>
      </section>
    </main>
  );
}
