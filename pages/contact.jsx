import React from 'react';
import Layout from '../components/Layout';
const ContactPage = () => {
    return (
        <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md py-2 px-4" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-4" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded-md py-2 px-4"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300">Send Message</button>
            </form>
          </div>
          {/* Map */}
          <div className="rounded-lg overflow-hidden">
            <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.3677373817785!2d144.96778461565568!3d-37.81827117975274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d21407d5ec5%3A0xc2d61fd5d512f40!2sFlinders%20Street%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2s!4v1644505317734!5m2!1sen!2s" className="w-full h-96" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
      </Layout>
    );
  };
  

export default ContactPage;
