import { useState, useEffect } from "react";

function Form() {

  // 1️⃣ Store input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // 2️⃣ Store error messages
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  // 3️⃣ Load saved data when page refreshes
  useEffect(() => {
    setName(localStorage.getItem("name") || "");
    setEmail(localStorage.getItem("email") || "");
  }, []);

  // 4️⃣ When user clicks SAVE
  const handleSubmit = (e) => {
  e.preventDefault();

  let valid = true;

  // NAME validation
  if (name === "") {
    setNameError("Name is required");
    valid = false;
  } else {
    setNameError("");
  }

  // EMAIL validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    setEmailError("Email is required");
    valid = false;
  } else if (!emailPattern.test(email)) {
    setEmailError("Enter a valid email (example@gmail.com)");
    valid = false;
  } else {
    setEmailError("");
  }

  // SAVE DATA
  if (valid) {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    alert("Data saved successfully ✅");
  }
};

  

  return (
    <div style={{ width: "300px", margin: "40px auto" }}>
      <h2>Simple Form</h2>

      <form onSubmit={handleSubmit}>

        {/* NAME */}
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p style={{ color: "red" }}>{nameError}</p>

        {/* EMAIL */}
        <input
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p style={{ color: "red" }}>{emailError}</p>

        <button>Save</button>
      </form>
    </div>
  );
}

export default Form;
