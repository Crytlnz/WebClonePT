import React from "react";

function ContactPage() {
  return (
    <div className="contact-box p-8 max-w-lg mx-auto rounded-lg shadow-lg">
      <h2 className="text-center text-2xl font-bold mb-6">Contact Us</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-white">
            Name
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            id="name"
            name="name"
            placeholder="Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-white">
            Email
          </label>
          <input
            type="email"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-white">
            Message
          </label>
          <textarea
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            id="message"
            name="message"
            rows="4"
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-white text-gray-700 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactPage;
