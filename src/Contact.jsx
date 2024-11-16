import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css"; // Minimal CSS for additional styling if needed
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

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
      await emailjs.send(
        "service_iggg3ut",
        "template_zmq358d",
        {
          name: formData.name,
          contactNumber: formData.contactNumber,
          email: formData.email,
          message: formData.message,
        },
        "WvAhG-WBk2RPe17Wg"
      );

      alert("Your message has been sent successfully!");
      setFormData({ name: "", contactNumber: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error sending your message.");
    }
  };

  return (
    <section
      id="contact"
      className="contact-section bg-gray-900 text-white py-16 px-6 lg:px-8 rounded-lg shadow-md max-w-lg mx-auto"
    >
      <h1 className="section-title">Contact Us</h1>

      <form className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input w-full p-3 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            required
          />
        </div>

        <div>
          <label
            htmlFor="contactNumber"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Contact Number
          </label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            className="form-input w-full p-3 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="+62-"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input w-full p-3 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="form-input w-full p-3 h-32 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here..."
            required
          ></textarea>
        </div>

        <div className="text-center pt-4">
          <button onClick={onClickButton} className="btn-submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <div className="social-media">
        <a
          href="https://www.instagram.com/we_codez/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaInstagram size={50} color="#E1306C" />
        </a>
        <a
          href="https://wa.me/message/BYSUKYFMAQPLA1"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaWhatsapp size={50} color="#25D366" />
        </a>
        <a
          href="mailto:andreaslouis.business@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaEnvelope size={50} color="#D44638" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
