import React from "react";

function Form({ openModal }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    openModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />

      <label>Gender:</label><br />
      <input type="radio" name="gender" /> Male
      <input type="radio" name="gender" /> Female <br /><br />

      <label>
        <input type="checkbox" required /> I agree
      </label>

      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Form;
