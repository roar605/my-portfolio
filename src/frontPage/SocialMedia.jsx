import { useState } from "react";
import contact from "../assets/contact.png"

 function SocialMedia() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    // 👉 Here you can send formData to EmailJS, backend API, etc.
    alert("Thank you for reaching out! 🚀");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen  flex flex-col items-center py-16">
      <h2 className="text-4xl font-bold mb-10">Contact Me</h2>

      <div className="flex flex-col md:flex-row items-center max-w-5xl w-full px-6 gap-12">
        {/* Left Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src={contact}
            alt="Contact Illustration"
          />
        </div>

        {/* Right Form Section */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-2">Get in touch</h3>
          <p className="text-gray-400 mb-6">
            My inbox is always open! Whether you've got a burning question or
            want to drop a friendly "hello", I'm all ears! Let's chat!
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-pink-600 focus:outline-none focus:border-pink-600"
            />

            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-pink-400 focus:outline-none focus:border-pink-600"
            />

            <textarea
              name="message"
              placeholder="Message *"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-3 rounded-md  border border-pink-400 focus:outline-none focus:border-pink-600"
            />

            <button
              type="submit"
              className="border border-pink-400 hover:bg-pink-300 px-6 py-3 rounded-md text-pink-400 hover:text-gray-700 font-semibold flex items-center gap-2 transition"
            >
              Say Hello 👋
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia