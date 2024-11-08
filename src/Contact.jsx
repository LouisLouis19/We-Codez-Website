import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onClickButton = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyu7rInF2n_Luxvj4GcR6R9l_Bn-_19W-qO9UvxRETStwjL9BGk9nyGpN-7oMqdJVJX/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (result.status === "success") {
        alert("Your message has been sent successfully!");
        setFormData({ name: "", contactNumber: "", email: "", message: "" }); // Clear form fields
      } else {
        alert("There was an error sending your message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error sending your message.");
    }
  };

  return (
    <div id="contact">
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>

      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div className="form-group">
                <label htmlFor="name">Enter Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div className="form-group pt-3">
                <label htmlFor="contactNumber">Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="+62-"
                  required
                />
              </div>
              <div className="form-group pt-3">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div className="form-group pt-3">
                <label htmlFor="message">Type your Message Here</label>
                <textarea
                  className="form-control"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Message"
                  required
                ></textarea>
              </div>

              <div className="col-12 pt-3">
                <button
                  onClick={onClickButton}
                  className="btn btn-outline-primary"
                  type="submit"
                >
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
