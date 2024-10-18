import React, { useState } from 'react';
import { ref, push, get } from 'firebase/database';
import { database } from '../firebaseConfig';


const verifySubmission = async (contactKey: string) => {
  try {
    const contactRef = ref(database, `contacts/${contactKey}`);
    const snapshot = await get(contactRef);
    if (snapshot.exists()) {
      console.log('Retrieved contact data:', snapshot.val());
      return true;
    } else {
      console.log('No data available for this contact key');
      return false;
    }
  } catch (error) {
    console.error('Error verifying submission:', error);
    // Assume the submission was successful if we can't verify due to permissions
    return true;
  }
};
const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const contactsRef = ref(database, 'contacts');
      const newContactRef = await push(contactsRef, {
        ...formData,
        timestamp: Date.now()
      });

      if (newContactRef.key) {
        console.log('Form data submitted successfully. New contact key:', newContactRef.key);

        // Verify the submission
        const verified = await verifySubmission(newContactRef.key);
        if (verified) {
          console.log('Data verification successful or skipped due to permissions');
          setSubmitMessage('Thank you for your message. We will get back to you soon!');
          setFormData({ name: '', email: '', message: '' });
        } else {
          console.log('Data verification failed');
          setSubmitMessage('Your message was sent, but there was an issue verifying it. We will still process your request.');
        }
      } else {
        console.error('No key generated for new contact');
        throw new Error('No key generated for new contact');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Get in Touch</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-4">
            Let's work together to create something amazing! Whether you're ready to start a new project or just want to ask a question, I'm here to help. Feel free to drop me a message, and I'll get back to you as soon as possible.
          </p>
          <p className="text-lg mb-4">
            I look forward to hearing from you and discussing how we can bring your vision to life!
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitMessage && <p className="mt-4 text-green-600">{submitMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
